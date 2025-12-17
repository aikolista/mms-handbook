import { useState, useEffect } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Button,
  Banner,
  Box,
  Divider,
  TextField,
  Select,
  InlineStack,
  Modal,
  InlineGrid,
  Spinner,
} from '@shopify/polaris';
import { teamMembers } from '../data/team';

interface Task {
  id: string;
  title: string;
  assigneeId: string;
  status: 'todo' | 'inProgress' | 'done';
  pillar: 'Customer Retention' | 'GMV Growth' | 'Enable Cross-Sell';
  description: string;
  expectedOutcome: string;
}

const API_URL = 'https://script.google.com/macros/s/AKfycbzG_WFtMHpaG4CE-Dyqcg8-R1_jslk7pDYZ__GYjpvzvsFCuVGSDQtfrpbjdHxiuAl2/exec';

export default function ProjectBoardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState<'todo' | 'inProgress' | 'done'>('todo');
  const [newTaskPillar, setNewTaskPillar] = useState<'Customer Retention' | 'GMV Growth' | 'Enable Cross-Sell'>('Customer Retention');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskExpectedOutcome, setNewTaskExpectedOutcome] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Load tasks from Google Sheets
  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      const data = await response.json();
      
      if (data.success) {
        setTasks(data.tasks || []);
      } else {
        setError(data.error || 'Failed to load tasks');
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again.');
      console.error('Load error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Load tasks on mount and refresh every 30 seconds
  useEffect(() => {
    loadTasks();
    const interval = setInterval(loadTasks, 30000);
    return () => clearInterval(interval);
  }, []);

  const assigneeOptions = teamMembers.map(member => ({
    label: member.name,
    value: member.id,
  }));

  const statusOptions = [
    { label: 'To Do', value: 'todo' },
    { label: 'In Progress', value: 'inProgress' },
    { label: 'Done', value: 'done' },
  ];

  const pillarOptions = [
    { label: 'Customer Retention', value: 'Customer Retention' },
    { label: 'GMV Growth', value: 'GMV Growth' },
    { label: 'Enable Cross-Sell', value: 'Enable Cross-Sell' },
  ];

  const handleAddTask = async () => {
    if (!newTaskTitle.trim() || !newTaskAssignee) return;

    setIsSaving(true);

    try {
      if (editingTask) {
        // Update existing task
        const updatedTask = {
          id: editingTask.id,
          title: newTaskTitle,
          assigneeId: newTaskAssignee,
          status: newTaskStatus,
          pillar: newTaskPillar,
          description: newTaskDescription,
          expectedOutcome: newTaskExpectedOutcome,
        };

        await fetch(API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'update',
            task: updatedTask,
          }),
        });
      } else {
        // Add new task
        const newTask: Task = {
          id: Date.now().toString(),
          title: newTaskTitle,
          assigneeId: newTaskAssignee,
          status: newTaskStatus,
          pillar: newTaskPillar,
          description: newTaskDescription,
          expectedOutcome: newTaskExpectedOutcome,
        };

        await fetch(API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'add',
            task: newTask,
          }),
        });
      }

      // Reload tasks from server
      await loadTasks();

      // Reset form
      setNewTaskTitle('');
      setNewTaskAssignee('');
      setNewTaskStatus('todo');
      setNewTaskPillar('Customer Retention');
      setNewTaskDescription('');
      setNewTaskExpectedOutcome('');
      setIsModalOpen(false);
      setEditingTask(null);
    } catch (error) {
      console.error('Save error:', error);
      setError('Failed to save task. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setNewTaskTitle(task.title);
    setNewTaskAssignee(task.assigneeId);
    setNewTaskStatus(task.status);
    setNewTaskPillar(task.pillar || 'Customer Retention');
    setNewTaskDescription(task.description || '');
    setNewTaskExpectedOutcome(task.expectedOutcome || '');
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete',
          taskId: taskId,
        }),
      });

      // Reload tasks from server
      await loadTasks();
    } catch (error) {
      console.error('Delete error:', error);
      setError('Failed to delete task. Please try again.');
    }
  };

  const handleMoveTask = async (taskId: string, newStatus: 'todo' | 'inProgress' | 'done') => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    try {
      const updatedTask = { ...task, status: newStatus };

      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          task: updatedTask,
        }),
      });

      // Reload tasks from server
      await loadTasks();
    } catch (error) {
      console.error('Move error:', error);
      setError('Failed to move task. Please try again.');
    }
  };

  const getAssigneeName = (assigneeId: string) => {
    const member = teamMembers.find(m => m.id === assigneeId);
    return member?.name || 'Unassigned';
  };

  const tasksByStatus = {
    todo: tasks.filter(t => t.status === 'todo'),
    inProgress: tasks.filter(t => t.status === 'inProgress'),
    done: tasks.filter(t => t.status === 'done'),
  };

  const renderTaskCard = (task: Task) => (
    <div
      key={task.id}
      style={{
        cursor: 'default',
        transition: 'all 0.2s ease',
        border: '2px solid #E3F5EF',
        borderRadius: '12px',
        padding: '16px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 128, 96, 0.1)';
        e.currentTarget.style.borderColor = '#008060';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#E3F5EF';
      }}
    >
      <BlockStack gap="200">
        <Text as="p" variant="bodyMd" fontWeight="semibold">
          {task.title}
        </Text>
        {task.pillar && (
          <div style={{
            display: 'inline-block',
            padding: '4px 10px',
            backgroundColor: task.pillar === 'Customer Retention' ? '#E3F5FF' : task.pillar === 'GMV Growth' ? '#FFF4E5' : '#F4F0FF',
            color: task.pillar === 'Customer Retention' ? '#0066CC' : task.pillar === 'GMV Growth' ? '#B97A00' : '#6B21A8',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 500,
          }}>
            {task.pillar}
          </div>
        )}
        {task.description && (
          <Text as="p" variant="bodySm" tone="subdued">
            {task.description}
          </Text>
        )}
        {task.expectedOutcome && (
          <Text as="p" variant="bodySm">
            🎯 {task.expectedOutcome}
          </Text>
        )}
        <Divider />
        <Text as="p" variant="bodySm" tone="subdued">
          👤 {getAssigneeName(task.assigneeId)}
        </Text>
        <InlineStack gap="200" wrap>
          <button
            onClick={() => handleEditTask(task)}
            style={{
              padding: '6px 12px',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '20px',
              border: '1px solid #008060',
              backgroundColor: '#ffffff',
              color: '#008060',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E3F5EF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => handleDeleteTask(task.id)}
            style={{
              padding: '6px 12px',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '20px',
              border: '1px solid #D72C0D',
              backgroundColor: '#ffffff',
              color: '#D72C0D',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FEF3F2';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            🗑️ Delete
          </button>
        </InlineStack>
        {true && (
          <div style={{ paddingTop: '8px', borderTop: '1px solid #F5F5F5' }}>
            <InlineStack gap="200" wrap>
              {task.status !== 'done' && (
                <button
                  onClick={() => handleMoveTask(task.id, task.status === 'todo' ? 'inProgress' : 'done')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: 500,
                    borderRadius: '16px',
                    border: 'none',
                    backgroundColor: '#F9FAFB',
                    color: '#616161',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3F5EF';
                    e.currentTarget.style.color = '#008060';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                    e.currentTarget.style.color = '#616161';
                  }}
                >
                  {task.status === 'todo' ? '→ In Progress' : '→ Done'}
                </button>
              )}
              {task.status !== 'todo' && (
                <button
                  onClick={() => handleMoveTask(task.id, task.status === 'done' ? 'inProgress' : 'todo')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: 500,
                    borderRadius: '16px',
                    border: 'none',
                    backgroundColor: '#F9FAFB',
                    color: '#616161',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3F5EF';
                    e.currentTarget.style.color = '#008060';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                    e.currentTarget.style.color = '#616161';
                  }}
                >
                  {task.status === 'done' ? '← In Progress' : '← To Do'}
                </button>
              )}
            </InlineStack>
          </div>
        )}
      </BlockStack>
    </div>
  );

  if (isLoading) {
    return (
      <Page title="📋 Project Board" subtitle="Track team tasks and projects">
        <Layout>
          <Layout.Section>
            <Card>
              <Box padding="1600">
                <InlineStack align="center" blockAlign="center">
                  <Spinner size="large" />
                  <Text as="p" variant="bodyMd">
                    Loading tasks...
                  </Text>
                </InlineStack>
              </Box>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Page
      title="📋 Project Board"
      subtitle="Shared team task board"
      backAction={{ onAction: () => window.history.back() }}
      primaryAction={{
        content: 'Add Task',
        onAction: () => {
          setEditingTask(null);
          setNewTaskTitle('');
          setNewTaskAssignee('');
          setNewTaskStatus('todo');
          setIsModalOpen(true);
        },
      }}
      secondaryActions={[
        {
          content: '🔄 Refresh',
          onAction: loadTasks,
        },
      ]}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            {error && (
              <Banner tone="critical" onDismiss={() => setError(null)}>
                {error}
              </Banner>
            )}

            <Banner tone="info">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" fontWeight="semibold">
                  🌐 Shared Team Board
                </Text>
                <Text as="p" variant="bodyMd">
                  This board is shared with your entire team! Tasks sync automatically every 30 seconds. 
                  Click "Refresh" to manually sync, or add/edit tasks and they'll update for everyone.
                </Text>
              </BlockStack>
            </Banner>

            <InlineGrid columns={{ xs: 1, md: 3 }} gap="400">
              {/* To Do Column */}
              <Card>
                <BlockStack gap="400">
                  <Box>
                    <InlineStack align="space-between" blockAlign="center">
                      <Text as="h2" variant="headingMd">
                        📝 To Do
                      </Text>
                      <Text as="span" variant="bodySm" tone="subdued">
                        {tasksByStatus.todo.length} tasks
                      </Text>
                    </InlineStack>
                  </Box>
                  <Divider />
                  <BlockStack gap="300">
                    {tasksByStatus.todo.length === 0 ? (
                      <Box padding="400">
                        <Text as="p" variant="bodyMd" tone="subdued" alignment="center">
                          No tasks in To Do
                        </Text>
                      </Box>
                    ) : (
                      tasksByStatus.todo.map(renderTaskCard)
                    )}
                  </BlockStack>
                </BlockStack>
              </Card>

              {/* In Progress Column */}
              <Card>
                <BlockStack gap="400">
                  <Box>
                    <InlineStack align="space-between" blockAlign="center">
                      <Text as="h2" variant="headingMd">
                        🚀 In Progress
                      </Text>
                      <Text as="span" variant="bodySm" tone="subdued">
                        {tasksByStatus.inProgress.length} tasks
                      </Text>
                    </InlineStack>
                  </Box>
                  <Divider />
                  <BlockStack gap="300">
                    {tasksByStatus.inProgress.length === 0 ? (
                      <Box padding="400">
                        <Text as="p" variant="bodyMd" tone="subdued" alignment="center">
                          No tasks in progress
                        </Text>
                      </Box>
                    ) : (
                      tasksByStatus.inProgress.map(renderTaskCard)
                    )}
                  </BlockStack>
                </BlockStack>
              </Card>

              {/* Done Column */}
              <Card>
                <BlockStack gap="400">
                  <Box>
                    <InlineStack align="space-between" blockAlign="center">
                      <Text as="h2" variant="headingMd">
                        ✅ Done
                      </Text>
                      <Text as="span" variant="bodySm" tone="subdued">
                        {tasksByStatus.done.length} tasks
                      </Text>
                    </InlineStack>
                  </Box>
                  <Divider />
                  <BlockStack gap="300">
                    {tasksByStatus.done.length === 0 ? (
                      <Box padding="400">
                        <Text as="p" variant="bodyMd" tone="subdued" alignment="center">
                          No completed tasks
                        </Text>
                      </Box>
                    ) : (
                      tasksByStatus.done.map(renderTaskCard)
                    )}
                  </BlockStack>
                </BlockStack>
              </Card>
            </InlineGrid>
          </BlockStack>
        </Layout.Section>
      </Layout>

      {/* Add/Edit Task Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
          setNewTaskTitle('');
          setNewTaskAssignee('');
          setNewTaskStatus('todo');
          setNewTaskPillar('Customer Retention');
          setNewTaskDescription('');
          setNewTaskExpectedOutcome('');
        }}
        title={editingTask ? 'Edit Task' : 'Add New Task'}
        primaryAction={{
          content: isSaving ? 'Saving...' : (editingTask ? 'Save' : 'Add Task'),
          onAction: handleAddTask,
          disabled: !newTaskTitle.trim() || !newTaskAssignee || isSaving,
          loading: isSaving,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: () => {
              setIsModalOpen(false);
              setEditingTask(null);
              setNewTaskTitle('');
              setNewTaskAssignee('');
              setNewTaskStatus('todo');
              setNewTaskPillar('Customer Retention');
              setNewTaskDescription('');
              setNewTaskExpectedOutcome('');
            },
          },
        ]}
      >
        <Modal.Section>
          <BlockStack gap="400">
            <TextField
              label="Task Title"
              value={newTaskTitle}
              onChange={setNewTaskTitle}
              placeholder="Enter task title"
              autoComplete="off"
            />
            <Select
              label="CS Pillar"
              options={pillarOptions}
              value={newTaskPillar}
              onChange={(value) => setNewTaskPillar(value as 'Customer Retention' | 'GMV Growth' | 'Enable Cross-Sell')}
            />
            <TextField
              label="Description"
              value={newTaskDescription}
              onChange={setNewTaskDescription}
              placeholder="Describe the project..."
              autoComplete="off"
              multiline={4}
            />
            <TextField
              label="Expected Outcome"
              value={newTaskExpectedOutcome}
              onChange={setNewTaskExpectedOutcome}
              placeholder="What metric or outcome do you expect?"
              autoComplete="off"
            />
            <Select
              label="Assignee (from Team Directory)"
              options={[
                { label: 'Select assignee...', value: '' },
                ...assigneeOptions,
              ]}
              value={newTaskAssignee}
              onChange={setNewTaskAssignee}
            />
            <Select
              label="Status"
              options={statusOptions}
              value={newTaskStatus}
              onChange={(value) => setNewTaskStatus(value as 'todo' | 'inProgress' | 'done')}
            />
          </BlockStack>
        </Modal.Section>
      </Modal>
    </Page>
  );
}

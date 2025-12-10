/**
 * MMS Project Board API
 * Google Apps Script to handle team task management
 */

const SHEET_ID = '1sJi6JPWs1kiX-h_12zRUbk81wlv3ALInNYnyd4cMbGE';
const SHEET_NAME = 'Sheet1';

/**
 * Handle GET requests - Fetch all tasks
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    
    // Skip header row
    const tasks = data.slice(1).map(row => ({
      id: row[0],
      title: row[1],
      assigneeId: row[2],
      status: row[3],
      pillar: row[4] || 'Customer Retention',
      description: row[5] || '',
      expectedOutcome: row[6] || ''
    })).filter(task => task.id); // Filter out empty rows
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      tasks: tasks
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle POST requests - Add, Update, or Delete tasks
 */
function doPost(e) {
  try {
    const params = JSON.parse(e.postData.contents);
    const action = params.action;
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    if (action === 'add') {
      // Add new task
      const task = params.task;
      sheet.appendRow([
        task.id, 
        task.title, 
        task.assigneeId, 
        task.status,
        task.pillar || 'Customer Retention',
        task.description || '',
        task.expectedOutcome || ''
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Task added successfully'
      })).setMimeType(ContentService.MimeType.JSON);
      
    } else if (action === 'update') {
      // Update existing task
      const task = params.task;
      const data = sheet.getDataRange().getValues();
      
      for (let i = 1; i < data.length; i++) {
        if (data[i][0] === task.id) {
          sheet.getRange(i + 1, 1, 1, 7).setValues([[
            task.id,
            task.title,
            task.assigneeId,
            task.status,
            task.pillar || 'Customer Retention',
            task.description || '',
            task.expectedOutcome || ''
          ]]);
          break;
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Task updated successfully'
      })).setMimeType(ContentService.MimeType.JSON);
      
    } else if (action === 'delete') {
      // Delete task
      const taskId = params.taskId;
      const data = sheet.getDataRange().getValues();
      
      for (let i = 1; i < data.length; i++) {
        if (data[i][0] === taskId) {
          sheet.deleteRow(i + 1);
          break;
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Task deleted successfully'
      })).setMimeType(ContentService.MimeType.JSON);
      
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid action'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

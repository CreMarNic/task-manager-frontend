import './TaskCard.css';

const TaskCard = ({ task, onEdit, onDelete, onStatusChange }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH':
        return 'priority-high';
      case 'MEDIUM':
        return 'priority-medium';
      case 'LOW':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
        return 'status-completed';
      case 'IN_PROGRESS':
        return 'status-in-progress';
      case 'TODO':
        return 'status-todo';
      default:
        return 'status-todo';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions">
          <button 
            onClick={() => onEdit(task)} 
            className="btn-icon"
            title="Edit task"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button 
            onClick={() => onDelete(task.id)} 
            className="btn-icon btn-icon-danger"
            title="Delete task"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <div className="task-tags">
          <span className={`task-tag ${getStatusColor(task.status)}`}>
            <i className="fas fa-circle"></i>
            {task.status.replace('_', ' ')}
          </span>
          <span className={`task-tag ${getPriorityColor(task.priority)}`}>
            <i className="fas fa-flag"></i>
            {task.priority}
          </span>
          {task.category && (
            <span className="task-tag task-category">
              <i className="fas fa-tag"></i>
              {task.category}
            </span>
          )}
        </div>

        {task.dueDate && (
          <div className="task-due-date">
            <i className="fas fa-calendar"></i>
            <span>{formatDate(task.dueDate)}</span>
          </div>
        )}
      </div>

      <div className="task-card-footer">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="status-select"
        >
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;

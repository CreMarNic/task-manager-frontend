import { useState, useEffect } from 'react';
import { tasksAPI } from '../services/api';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    category: '',
    search: '',
  });

  useEffect(() => {
    loadTasks();
  }, [filters]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await tasksAPI.getAll(filters);
      setTasks(data);
    } catch (err) {
      setError('Failed to load tasks. Please try again.');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleSave = async (taskData) => {
    try {
      if (editingTask) {
        await tasksAPI.update(editingTask.id, taskData);
      } else {
        await tasksAPI.create(taskData);
      }
      setShowForm(false);
      setEditingTask(null);
      loadTasks();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save task. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await tasksAPI.delete(id);
      loadTasks();
    } catch (err) {
      setError('Failed to delete task. Please try again.');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (task) {
        await tasksAPI.update(id, { ...task, status: newStatus });
        loadTasks();
      }
    } catch (err) {
      setError('Failed to update task status. Please try again.');
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      status: '',
      priority: '',
      category: '',
      search: '',
    });
  };

  if (loading && tasks.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <div>
          <h1>My Tasks</h1>
          <p className="task-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</p>
        </div>
        <button onClick={handleCreate} className="btn btn-primary btn-create">
          <i className="fas fa-plus"></i>
          New Task
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError('')} className="error-close">
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search tasks..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="filter-input"
            />
          </div>

          <div className="filter-group">
            <label>Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="filter-select"
            >
              <option value="">All</option>
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Priority</label>
            <select
              value={filters.priority}
              onChange={(e) => handleFilterChange('priority', e.target.value)}
              className="filter-select"
            >
              <option value="">All</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Category</label>
            <input
              type="text"
              placeholder="Filter by category"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="filter-input"
            />
          </div>
        </div>

        {(filters.status || filters.priority || filters.category || filters.search) && (
          <button onClick={clearFilters} className="btn-clear-filters">
            <i className="fas fa-times"></i>
            Clear Filters
          </button>
        )}
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-tasks"></i>
          <h3>No tasks found</h3>
          <p>
            {Object.values(filters).some(f => f) 
              ? 'Try adjusting your filters' 
              : 'Create your first task to get started!'}
          </p>
          {!Object.values(filters).some(f => f) && (
            <button onClick={handleCreate} className="btn btn-primary">
              Create Task
            </button>
          )}
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}

      {showForm && (
        <TaskForm
          task={editingTask}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}
    </div>
  );
};

export default TaskList;

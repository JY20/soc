import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file in the src folder for custom styles

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Social Group App</h1>

      {/* Sample Post Component */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Post Title</h5>
          <p className="card-text">This is a sample post content. You can add more details here.</p>
        </div>
      </div>

      {/* Sample Post Form */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Create a Post</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label">Title</label>
              <input type="text" className="form-control" id="postTitle" />
            </div>
            <div className="mb-3">
              <label htmlFor="postContent" className="form-label">Content</label>
              <textarea className="form-control" id="postContent" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

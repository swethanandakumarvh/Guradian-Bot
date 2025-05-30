interface Issue {
  type: string;
  description: string;
  reporter_name?: string;
  reporter_phone?: string;
  location: string;
}

interface ChatMessage {
  role: string;
  content: string;
}

interface Post {
  title: string;
  content: string;
  author: string;
}

// Simple storage utility using localStorage
export const storage = {
  getIssues: () => {
    const issues = localStorage.getItem('issues');
    return issues ? JSON.parse(issues) : [];
  },
  
  saveIssue: (issue: Issue) => {
    const issues = storage.getIssues();
    const newIssue = {
      ...issue,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      status: 'pending'
    };
    issues.push(newIssue);
    localStorage.setItem('issues', JSON.stringify(issues));
    return newIssue;
  },

  getChatMessages: () => {
    const messages = localStorage.getItem('chat_messages');
    return messages ? JSON.parse(messages) : [];
  },

  saveChatMessage: (message: ChatMessage) => {
    const messages = storage.getChatMessages();
    messages.push({
      ...message,
      id: Date.now().toString(),
      created_at: new Date().toISOString()
    });
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  },

  getPosts: () => {
    const posts = localStorage.getItem('community_posts');
    return posts ? JSON.parse(posts) : [];
  },

  savePost: (post: Post) => {
    const posts = storage.getPosts();
    const newPost = {
      ...post,
      id: Date.now().toString(),
      created_at: new Date().toISOString()
    };
    posts.unshift(newPost);
    localStorage.setItem('community_posts', JSON.stringify(posts));
    return newPost;
  },

  updatePosts: (posts: Post[]) => {
    localStorage.setItem('community_posts', JSON.stringify(posts));
  }
};
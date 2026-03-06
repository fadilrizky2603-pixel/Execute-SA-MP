# Execute SA-MP - Community Project Showcase

Welcome to **Execute SA-MP**, a community-driven platform where SA-MP developers can showcase their amazing projects and connect with other developers in the community!

## 🌟 About Execute SA-MP

Execute SA-MP is a web-based showcase platform for SA-MP (San Andreas Multiplayer) community projects. It serves as a central hub where developers can:
- 📁 Upload and publish their SA-MP projects
- 🤝 Connect with other community members
- 💼 Build their portfolio
- 🔗 Share project links and details
- 💬 Network through Discord

## 🚀 Getting Started

### View the Website

The website is hosted on GitHub Pages. You can access it here:
- 🔗 **[Execute SA-MP Website](https://fadilrizky2603-pixel.github.io/Execute-SA-MP/)**

### Local Development

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fadilrizky2603-pixel/Execute-SA-MP.git
   cd Execute-SA-MP
   ```

2. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server (Python, Node.js, etc.)

   **Using Python (Python 3):**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```

## 📋 Project Structure

```
Execute-SA-MP/
├── index.html          # Main website file
├── style.css           # Website styling
├── script.js           # JavaScript functionality
├── projects.json       # Project database
├── README.md          # Documentation (this file)
└── assets/            # Images, icons, etc.
```

## 📝 How to Submit Your Project

Want to showcase your SA-MP project? Follow these steps:

### Step 1: Prepare Your Project Information

Gather the following information about your project:
- **Project Name** - The title of your project
- **Description** - A brief description (1-2 sentences)
- **Developer Name** - Your name/username
- **Discord Contact** - Your Discord username (format: username#0000)
- **Tags** - Categories (e.g., "Admin", "Economy", "Roleplay")
- **GitHub Link** (Optional) - Link to your GitHub repository

### Step 2: Add Your Project to projects.json

1. Fork this repository or create a new branch:
   ```bash
   git checkout -b add-my-project
   ```

2. Open `projects.json` and add your project following this format:
   ```json
   {
     "id": 4,
     "name": "Your Project Name",
     "description": "Brief description of your project",
     "developer": "Your Name",
     "discord": "your_username#0000",
     "tags": ["Tag1", "Tag2", "Tag3"],
     "githubLink": "https://github.com/your-username/your-project"
   }
   ```

3. Commit your changes:
   ```bash
   git add projects.json
   git commit -m "Add [Your Project Name] to showcase"
   ```

4. Push to your branch:
   ```bash
   git push origin add-my-project
   ```

5. Create a Pull Request on GitHub

### Step 3: Review & Publication

- Our team will review your submission
- We'll check the project details and ensure quality
- Once approved, your project will appear on the website!

## 📋 Project Requirements

To ensure quality submissions, please ensure:

- ✅ Your project name is clear and descriptive
- ✅ Description is accurate and concise
- ✅ Discord contact is valid and responsive
- ✅ At least 2 relevant tags
- ✅ GitHub link is valid (if provided)

## 💬 Contact & Community

### Join Our Community

Connect with other Execute SA-MP community members:

**📱 Discord Server:** [Join Here](https://discord.gg/your-discord-link)
- Replace the Discord link in `index.html` with your actual server invite

### Get Help

If you have questions or need help:
1. Check this README
2. Visit our Discord server
3. Open an issue on GitHub

## 🎨 Website Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Project Grid** - Beautiful display of all submitted projects
- **Search & Tags** - Easy navigation (coming soon)
- **Developer Profiles** - Direct Discord contact
- **GitHub Integration** - Link to project repositories

## 🛠️ Technology Stack

- **HTML5** - Structure
- **CSS3** - Styling and responsive design
- **JavaScript** - Dynamic functionality
- **JSON** - Project data storage

## 📄 License

This project is open-source and available under the MIT License.

## 🙏 Credits

Created by the Execute SA-MP community for the Execute SA-MP community.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Submit a Project** - Follow the steps above
2. **Report Issues** - Found a bug? Open an issue!
3. **Suggest Features** - Have an idea? Let us know!
4. **Improve Documentation** - Help make this README better

## 📞 Support

For support or inquiries:
- 📧 Contact us through Discord
- 🐛 Report bugs on GitHub Issues
- 💡 Share feature requests on GitHub Discussions

---

**Made with ❤️ for the SA-MP Community**

Happy coding! 🚀
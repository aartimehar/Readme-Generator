function generateMarkdown(data) {
    return `
# ${data.heading}

## 📄 Description
${data.description}

## ⚙️ Requirements
${data.requirements}

## 🎮 Usage
${data.usage}

  `;
  }
  

export default generateMarkdown;
  
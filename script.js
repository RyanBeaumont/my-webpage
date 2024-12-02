const data = {
    title: "Welcome to CS3210 Template Engine Lab",
    content: "This is a simple template engine demonstration.",
    author: "Dr.Red",
};

function renderTemplate(template, data) {
    for (const key in data) {
        const regex = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(regex, data[key]);
    }
    return template;
}

const template = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>Author: {{author}}</p>
`;

const app = document.getElementById('app');
app.innerHTML = renderTemplate(template, data);

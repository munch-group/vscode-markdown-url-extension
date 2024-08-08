# vscode-markdown-url-extension
VS Code extension customising how Readcube urls are rendered when dragged into markdown or quarto

## Plan
1. Create the Extension Structure:
   - Use yo code to scaffold a new VS Code extension
   - Choose TypeScript as the language.
2. Modify package.json:
   - Add a contribution point for the command that will handle the URL rendering.
3. Implement the Command:
   - In src/extension.ts, implement the command to customize how dragged URLs are rendered in Markdown files.
4. Register Event Listeners:
   - Listen for drag-and-drop events and customize the rendering of URLs in Markdown files.

## Steps

1. Scaffold the Extension:

    ```bash
    npm install -g yo generator-code
    yo code
    # Follow the prompts to create a new TypeScript extension
    ```

2. Modify package.json:
   - Add a command to handle URL rendering.
3. Implement the Command in src/extension.ts:
   - Add logic to customize the rendering of dragged URLs in Markdown files.

## Final Steps
1. Compile the Extension:
    ```bash
    npm run compile
    ```
2. Run the Extension:
   - Press F5 in VS Code to open a new window with the extension loaded.
3. Test the Extension:
   - Drag and drop a URL into a Markdown file and see the customized rendering.

This extension listens for text document changes in Markdown files and replaces URLs with a custom format. Adjust the regex and replacement logic as needed for your specific customization.
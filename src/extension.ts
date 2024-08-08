import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.customizeMarkdownUrlRendering', () => {
        vscode.window.showInformationMessage('Custom Markdown URL Renderer Activated');
    });

    context.subscriptions.push(disposable);

    vscode.workspace.onDidChangeTextDocument(event => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'markdown') {
            const document = editor.document;
            const text = document.getText();
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const matches = text.match(urlRegex);
            if (matches) {
                matches.forEach(url => {
                    const customRenderedUrl = `[Custom URL](${url})`;
                    const edit = new vscode.WorkspaceEdit();
                    const startPos = document.positionAt(text.indexOf(url));
                    const endPos = document.positionAt(text.indexOf(url) + url.length);
                    edit.replace(document.uri, new vscode.Range(startPos, endPos), customRenderedUrl);
                    vscode.workspace.applyEdit(edit);
                });
            }
        }
    });
}

export function deactivate() {}
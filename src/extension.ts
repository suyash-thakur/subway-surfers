// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('🏃 SUBWAY RIZZ MODE ACTIVATED FR FR NO CAP');

	let currentPanel: vscode.WebviewPanel | undefined = undefined;

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('subway-surfers.helloWorld', () => {
		// Random Gen Z responses
		const responses = [
			"NAH BRO YOUR CODE GOT THAT GYATT FR FR 😳",
			"CAUGHT IN 4K WRITING CLEAN CODE (REAL) 📸",
			"NO WAY BRO GOT THAT RIZZ WITH TYPESCRIPT 🥶",
			"SKILL ISSUE DETECTED IN YOUR CODE FR FR 💀",
			"YOUR CODE BUSSIN RESPECTFULLY NO CAP 🔥",
			"SUBWAY GUARD FOUND YOUR BUGS (GONE WRONG) ⚠️"
		];

		// Pick a random response
		const response = responses[Math.floor(Math.random() * responses.length)];

		// Show the message with some emojis
		vscode.window.showInformationMessage(`${response}`);

		// Create and show panel
		if (currentPanel) {
			currentPanel.reveal(vscode.ViewColumn.Three);
		} else {
			currentPanel = vscode.window.createWebviewPanel(
				'subwayRizz',
				'🏃 SUBWAY RIZZ (REAL) (GONE WRONG) 📱',
				vscode.ViewColumn.Three,
				{
					enableScripts: true,
					retainContextWhenHidden: true
				}
			);

			// Set webview content
			currentPanel.webview.html = getWebviewContent();

			// Reset when the panel is closed
			currentPanel.onDidDispose(
				() => {
					currentPanel = undefined;
				},
				null,
				context.subscriptions
			);
		}

		// Visual effects in editor
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// Flash the editor background (optional - remove if too annoying)
			editor.setDecorations(vscode.window.createTextEditorDecorationType({
				backgroundColor: 'rgba(255, 0, 0, 0.2)'
			}), [new vscode.Range(0, 0, editor.document.lineCount, 0)]);

			// Remove the decoration after a short delay
			setTimeout(() => {
				editor.setDecorations(vscode.window.createTextEditorDecorationType({
					backgroundColor: 'transparent'
				}), [new vscode.Range(0, 0, editor.document.lineCount, 0)]);
			}, 500);
		}
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>SUBWAY RIZZ FR FR</title>
		<style>
			body {
				margin: 0;
				padding: 0;
				background-color: #1e1e1e;
				color: white;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				overflow: hidden;
			}
			.container {
				width: 100vw;
				height: 100vh;
				display: flex;
				flex-direction: column;
				margin: 0;
				padding: 0;
			}
			.header {
				background: linear-gradient(45deg, #ff6b6b, #4cd137);
				padding: 5px;
				text-align: center;
			}
			.title {
				font-size: 16px;
				margin: 0;
				color: white;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
			}
			.subtitle {
				font-size: 12px;
				margin: 2px 0 0 0;
				color: white;
			}
			.video-container {
				flex: 1;
				position: relative;
				width: 100%;
				margin: 0;
				background: black;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			video {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1 class="title">🏃 SUBWAY RIZZ SIMULATOR FR FR NO CAP 📱</h1>
				<p class="subtitle">NAH BRO WATCH THIS GYATT GAMEPLAY WHILE YOU CODE (REAL) (GONE WRONG) 😳</p>
			</div>
			<div class="video-container">
				<video 
					autoplay 
					loop 
					muted 
					playsinline
					src="https://res.cloudinary.com/diroilukd/video/upload/v1737193929/subway/Subway_surfers_1_hour_Gameplay_no_commentary_free_to_use_-_ImNotRU_720p_h264_gaspic.mp4 ">
				</video>
			</div>
		</div>
		<script>
			const video = document.querySelector('video');
			video.play().catch(function(error) {
				console.log("Video autoplay failed:", error);
			});
		</script>
	</body>
	</html>`;
}

// This method is called when your extension is deactivated
export function deactivate() {}

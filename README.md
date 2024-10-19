# CCSWEC's Discord Bot in Javascript!

Hi there! This is the Collin College Software Engineering Club's Javascript Discord bot. This guide can help you get started.

## Setup

### 1. Install Node.js

You'll need Node.js (a Javascript runtime) to run the bot. If you're on Windows or macOS, go to [the prebuilt installers page](https://nodejs.org/en/download/prebuilt-installer) to get an installer. If you're on Linux, go to [the package manager guide](https://nodejs.org/en/download/prebuilt-installer) for instructions on how to get a Node.js version manager.

### 2. Clone the Project

This guide mostly assumes you're using [VSCode](https://code.visualstudio.com). Near the top of this repository's Github page, press the green Code button and go the the Local tab, then copy the repository address using the copy icon button. In VSCode, press Ctrl+Shift+P (or Command+Shift+P on macOS) and search 'clone'. Select `Git: Clone`, paste the repository address, and press enter. Select a destination folder (like Documents) when it asks, and choose to open the cloned repository when it gives the dialog.

### 3. Install Dependencies

In the VSCode menu bar, use Terminal -> Run Task and select `npm` and then `npm: install`. A task terminal panel should open, and should install the dependencies and finish without error. If you see red error text, scroll up past NPM's disclaimer for error details.

### 4. Add the Discord Token

In VSCode's file panel, create a new file in the root of the project called `.env`. Add one line, in this form:

```
DISCORD_TOKEN=<token>
```

replacing `<token>` with the actual Discord token (without the brackets).

## Run the Bot

To run the bot, with VSCode's menu bar, use Terminal -> Run Task and select `npm` -> `npm: start`.
# Openbin

Openbin is a Pastebin clone that takes notes & code sharing to the next level, by taking advantage of both a CLI and a web editor. We built it for the 8th Supabase Launch Week hackathon, attempting to solve issues we face often while trying to share snippets and code with friends and colleagues. The app is built using Go for the CLI and Next.js, Tailwind, TypeScript and `shadcn/ui` for the web editor. We take advantage of a whole lot of Supabase products, including the Database, Auth, Storage and the brand new Resend email integration. 

# Documentation
The documentation is designed to help or refer you to the Openbin CLI. Occasionally, errors may occur, you may encounter bugs, or you simply have questions or need assistance in using it - if you are in one of these situations, [simply open an issue on the repo](https://github.com/ethndotsh/openbin/issues/new)!

To view the complete list of options not mentioned in the documentation: `openbin up --help`.

## Installation
Without guessing, this is the most important step in using CLI. You can install it on any operating system, whether Windows, Linux or macOS.

### Windows (Powershell)
```powershell
irm https://openbin.ethn.sh/install.ps1 | iex
```

### Linux and macOS
```shell
curl -fsSL https://openbin.ethn.sh/install.sh | sh
```

To make sure that Openbin is installed, enter `openbin --version` in your terminal. If it gives you the version, this means that Openbin has been successfully installed and you're ready to start using it! 🎉

## Login to your account
To get your pastes into your account, you should login to your Openbin account by entering this command:
```
openbin login
```
or with OAuth providers:
```
openbin login -p github/gitlab/bitbucket
```

Also, if you want to logout of your account, all you have to do is `openbin logout` - it's that simple!
> Please note that you can't upload without being logged in, so this step is necessary.

## Upload a file to Openbin

```
openbin upload [file.extension]
```
### Options:
`--title [value]`\
`--description [value]`\
`--language [value]`\
`--expire [value]`\
`--editor [value]`\
`--draft`

## Manage your pastes
The CLI lets you do everything just like with the web editor, and that means you can manage your pastes too!

### Get a list of the pastes you've created
```
openbin pastes
```
### Delete a paste
```
openbin delete [uuid]
```
> The UUID is located directly after the pastes/.

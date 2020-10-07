# Hacktoberfest 2020

## Make a Pull Request this Hacktober!

## Motivation
I noticed people who are new to open source were making pull requests in popular repos, but their pull request were either *low-quality* or *did not follow rules & guidelines*. Due to which maintainers of the repository had no choice but to close their pull request. And a closed pull request can discourage anyone. But we as community do not want newcomers do give up, we were all there once. So **I invite all of you to create a pull request in this repo, whether it be your first or not, you are allowed to open a pull request**. I have set up simple rules & guidelines (below) so newcomers get the idea of how to make quality pull requests in popular repos in the future, if not this hacktober then the next one. Cheers.

## Guide

- Select your preferred language (python, java, javascript)
- Create a function in that language (any function is **OKAY**, you can create `sum of two numbers` if you like)
- Send a Pull request!

## Instructions-

- Fork this Repository using the `Fork` button
- Clone your forked repository to your pc

```shell
git clone url/of/your/clone/
```

e.g

```shell
git clone https://github.com/<your-username>/hacktoberfest-2020.git
```

- Create a branch for your pull request

```shell
git checkout -b hacktoberfest-pr
```

- Create a new file in the `src/<language>` folder, where `<language>` is the language you intend to submit the pull request in, like if you want to work in `python`, you will create a file in `src/python`
  > **Note:: You can create a language folder if it does not already exists**
- Name the file like `<your-username>-<function-name>.<ext>`,
  where `your-username` is your github username, `function-name` is the function you will create in the file, `<ext>` is the file extension.
  e.g. If you want to create a `sum` function in javascript, your filename will be

```
octocat-sum.js
```

Where octocat is your username

- Add a short description of your function e.g.

```
This functions prints the sum of two numbers
```

- Stage your files using

```shell
git add .
```

- Commit your changes

```shell
git commit -m "Add <function-name> in <language>
```

e.g.

```shell
git commit -m "Add sum in javascript
```

- Push changes to your cloned repo

```shell
git push origin hacktoberfest-pr
```

- Create a pull request
- Star this repository [optional but helpful to me :) ]
- Wait for your Pull Request to get merged
- Congrats!! you're one step closer to winning this hacktober

## Rules

- Each PR should only add one file, if you want to add more files, you can create more PRs
- Each file should only contain one function, if you want to do more functions, do them in separate files in their respective folders, and send them as separate PRs
- Be nice to each other

## Notes

- Any function is valid, whether it prints something, does math, loops, anything, _any function is valid_
- You **can** create the same function in more than one language and send them in separate PRs.
- You can add usage example of your function in the same file, if you want. Although it is **not required**, the function itself is enough.
- If someone has already added a function you like to add, **YOU CAN STILL ADD IT**, your filename will start from your username, so you can create the same function with the same function name.
  However, it is best to add _your_ implementation of the function rather than just completely copying.
- Libraries & frameworks of any language are also valid, just send them in their own respective folder (create one if does not exists).
- Any valid syntax is valid, regardless of the fact that it may need to be transpiled/compiled/bundled. Which means you can use typescript, es6 or anything like these.
- If you want to do a language that does not have functions like (html, css), you can create a _logical element_ of that language and submit, it will count as a valid Pull request for that language. Like for `html` you can send a **form** (just `<form>FORM</form>` will not do), instead you should add input fields, buttons, attributes and add some content to display to make it look like a baic form. Same goes for `css`, you can do a `selector` (which styles an `html element`, changes some property on hover etc, makes it responsive on different screens etc). So basically, it should show that you put in some work. 

## Any Questions?

Feel free to open an issue.

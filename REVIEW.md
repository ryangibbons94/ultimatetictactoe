# Intro

Hi Ryan,

this is Sebastian from Twitter 👋🏼 ([@LifeLongThinker](https://twitter.com/LifeLongThinker)). Thanks for this opportunity to work with you.

A few remarks on how I usually do reviews:

* I add my comments and modifications in a separate branch (usually prefixed 'Review-[Your Branch]', called henceforth the **review branch**), so that I won't disturb your original work (called henceforth the **code branch**).
* We will be working with the review branch in a dialog-fashion. This means that we will take turns adding comments to it and modifying it. Please always feel free to add to or modify my comments and code (questions, comments, modifications, etc.).
* You can modify your original source (code branch) along as our review progresses.
* That way you can pick the parts you are interested in and skip the rest.
* You can always reach out on Twitter ([@LifeLongThinker](https://twitter.com/LifeLongThinker)) or Discord (LifeLongThinker#4134) in case you have any pressing issues or questions.

Two important thigs:

> **Golden Rule**
> Everyt comment I write and every piece of code I modify is done with one purpose: **to help you grow, to encourage, not discourage you**. You decide which pieces you want to pick up, and which you do not.

> **Principle of Competing Goals**
> Software development is complex. There is never really only one solution to a problem. There are usually no right/wrong answers, only competing answers serving competing goals. As someone who has been in this field for a long time, I can assure you that no one has all the answers. We are all only as smart as the people we are willing to learn from and with.

# Review

## First Look At Your Code

You have a really nice project here. And it's working, which is the most important step of all. Now, let's see how we can make your life as a developer a little easier. That way you will have more of your precious time to spend on more awesome projects.

I like how you have structured your code already into separate classes (`Board` and `BigBoard`). We will be working with these and make them shine. First off, though, I'd like to divert your attention to another issue.

> **Structuring and naming**
> These are two very important parts of development because they help you manage complexity by hiding information, protecting implementation details, reducing work contexts, etc.
> Using classes in OOP languages is one of many ways to structure code. Functions are another. We can also mix these means. Anything is allowed.

## Repetition: Let the Computer Do the Heavy-Lifting
If you look closely at your file `main.js` and then zoom out to see your code from a bird's-eye perspective, you will recognize some visual regularities (check lines 1 to 19, 30 to 40, 138 to 146, and 283 to 291 as just a few examples). These are usually caused by repetition.

Repetition is okay as long as it doesn't get in your way. More often than not, though, it does so quite quickly. The good thing is: Computers are so very good at repetition, while we human beings are not. So, let's have the computer do the heavy-lifting to free our hands for more interesting tasks.

> **Task #1: Reduce repetition**
> Check the lines 1-9 and 11-19 in your `main.js`. Do you see any way how we can get rid of the repetitive lines of code? Think about the tools you have in your JavaScript belt. Which data types handle large collections of stuff well? Can we use one of those here?
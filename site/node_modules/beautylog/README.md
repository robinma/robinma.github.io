# beautylog
beautiful logging, TypeScript ready

## Status
[![build status](https://gitlab.com/pushrocks/beautylog/badges/master/build.svg)](https://gitlab.com/pushrocks/beautylog/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/beautylog.svg)](https://david-dm.org/pushrocks/beautylog)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/beautylog/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/beautylog/master/dependencies/npm)
[![bitHound Score](https://www.bithound.io/github/pushrocks/beautylog/badges/score.svg)](https://www.bithound.io/github/pushrocks/beautylog)
[![codecov](https://codecov.io/gh/pushrocks/beautylog/branch/master/graph/badge.svg)](https://codecov.io/gh/pushrocks/beautylog)

## Usage

```typescript
var beautylog = require("beautylog");

beautylog.log("some log message"); // normal console log message
beautylog.info("some log message") // info console log message
beautylog.ok("some log message"); // ok console log message
beautylog.warn("some log message"); // warn console log message
beautylog.success("some success message"); // success console log message
beautylog.error("some error message"); // error console log message
```
The plugin produces beautiful output like this:
![console.png](https://mediaserve.lossless.digital/github.com/pushrocks/beautylog/console.png)

### Ora Integration
beautylog wraps the excellent ora module from npm to better work with beautylog. In general that means that you can log persistent messages WHILE you are actually having an active Ora object. beautylog handles all the fuss for you.

```typescript
var myOra = new beautylog.Ora("my awesome text", "blue");
myOra.start();
beautylog.info("some persistent text") //does not disturb myOra
console.log("something") // even this works because console.log is monkeypatched by beautylog
myOra.text("some updated text");
myOra.stop();
```

### Console Tables
beautylog allows displaying data in nice tables for better overview.

> **Note:** This only works only in nodejs for now.

There are different types of tables.

#### Custom

```javascript
var beautylog = require("beautylog");
var myTable = beautylog.table.new("custom",["Heading1".blue,"Heading2".blue,"Heading3".blue]); // type "custom"
myTable.push(["check 1","success"]); // adds a row the myTable
myTable.push(["check 2","error"]); // adds a row the myTable
myTable.push(["check 3","error"]); // adds a row the myTable
myTable.print(); //prints myTable to the console
```

#### Checks

```javascript
var beautylog = require("beautylog");
var myTable = beautylog.table.new("checks"); // type checks
myTable.push(["check 1","success"]); // adds a row to myTable
myTable.push(["check 2","error"]); // adds a row to myTable
myTable.push(["check 3","error"]); // adds a row to myTable
myTable.print(); //prints myTable to console
```

The table from the code with type "checks" above looks like this:
![table.png](https://mediaserve.lossless.digital/github.com/pushrocks/beautylog/table.png)

## Centralized remote logging
Beautylog makes it easy to have all your node applications log to a remote location.

Currently supported remote providers:

* loggly.com

```typescript
beautylog.remote.loggly({
    token: "loggly-token",
    subdomain: "loggly-subdomain",
    appName: "some App Name",
    serverName: "some Server Name"
});
```

> Note: since beautylog monkeypatches all console log methods.
There is no need to change anything in your code.
Everything that is getting logged to your console by node will get logged to loggly as well.

## About the authors:
[![Project Phase](https://mediaserve.lossless.digital/lossless.com/img/createdby_github.svg)](https://lossless.com/)

[![PayPal](https://img.shields.io/badge/Support%20us-PayPal-blue.svg)](https://paypal.me/lossless)

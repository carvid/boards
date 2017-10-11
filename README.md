# README

## Prerequisites

* Ruby 2.4.2
* Yarn
* Foreman

## Up and Running

First, install the project dependencies

```
$ bundle && yarn
```

Then, create the database and populate the initial data

```
$ rake db:setup
```

Finally, run the server and visit http://localhost:3000

```
$ foreman start -f Procfile.dev
```

## Tests

You can run all the tests with:

```
$ rake spec
```


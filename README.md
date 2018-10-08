# Sebas

Create aliases to commands or tasks(JS/Sh files) using files.

## Installation

```sh
# For npm users
npm i -g sbas
# For yarn users
yarn global add sbas
```

## Usage

Create a `.sebas` folder in your $HOME directiory. Then add your commands by creating files that has the shortcut name and contain the intended command:

```sh
echo "rpm-ostree status" > status
```

Then use it anywhere like this:

```sh
sbas status
```

If the command isn't found inside `.sebas` folder, sebas will try to run the command as is:

```sh
sbas ls # where ls command isn't inside .sebas folder
# will show files like ls does
```

### Using folders to group commands

```sh
mkdir os && cd os
echo "rpm-ostree status" > status
```

and use it like this:

```sh
sbas os status
```

### JS tasks

you can add js files inside `.sebas` they will be executed when called:

```sh
echo "console.log(\"Hi :)\")" > hi.js
```

and use it like this:

```sh
sbas hi
Hi :)
```

### sh files

you can run sh files the same way as js ones:

```sh
# inside .sebas folder
echo "touch hi.js && ls" > yo.sh
```

and use it like this:

```sh
sbas yo
hi.js # etc...
```

### Change `.sebas` directory

Add an environmental variable called `SEBAS_DIR` it will be used by default.

## Contributing

1. Fork it!
2. Create your feature branch (`git checkout -b my-cool-feature`)
3. Commit your changes (`git commit -am 'add my feature'`)
4. Push to the branch (`git push origin my-cool-feature`)
5. Create a new Pull Request

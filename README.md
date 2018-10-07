# Sebas

Create aliases to commands or tasks using files.

## Installation

```sh
# For npm users
npm i -g sbas
# For yarn users
yarn global add sbas
```

## Usage

create a `.sebas` folder in your $HOME directiory. Then add your commands by creating files that has the shortcut name and contain the intended command:

```sh
echo "rpm-ostree status" > status
```

then use it anywhere like this:

```sh
sbas status
```

### Using folders to group commands:

```sh
mkdir os && cd os
echo "rpm-ostree status" > status
```

and use it like this:

```sh
sbas os status
```

### JS tasks:

you can add js files inside `.sebas` they will be executed when called:

```sh
echo "console.log("Hi :)")" > hi.js
```

and use it like this:

```sh
sbas hi
Hi :)
```

### Change `.sebas` directory

Add an environmental variable called `SEBAS_DIR` it will be used by default.

## Contributing

1. Fork it!
2. Create your feature branch (`git checkout -b my-cool-feature`)
3. Commit your changes (`git commit -am 'add my feature'`)
4. Push to the branch (`git push origin my-cool-feature`)
5. Create a new Pull Request

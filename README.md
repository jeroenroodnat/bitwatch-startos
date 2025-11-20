# Wrapper for Bitwatch 

[Bitwatch](https://github.com/zapomatic/bitwatch) Monitor Bitcoin addresses in the mempool and on-chain using the mempool.space API. Run your own node and monitor your own addresses privately. Get Telegram notifications for onchain and mempool activity relating to addresses. 

## Dependencies

- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [yq](https://mikefarah.gitbook.io/yq)
- [toml](https://crates.io/crates/toml-cli)
- [make](https://www.gnu.org/software/make)
- [embassy-sdk]

## Cloning

Clone the project locally. Note the submodule link to the original project(s). 

```
git clone https://github.com/jeroenroodnat/bitwatch-startos 
```

## Building

To build the project, run the following commands:

```
make
```

## Installing (on Embassy)

SSH into an Embassy device.
`scp` the `.s9pk` to any directory from your local machine.

```
scp bitwatch.s9pk root@<LAN ID>:/tmp
```

Run the following command to determine successful install:

```
startos-cli auth login
startos-cli package install /tmp/bitwatch.s9pk
```

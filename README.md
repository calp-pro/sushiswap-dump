# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;sushiswap-dump

<br>

Static set of addresses (SushiSwap Ethereum mainnet).<br>
New pairs updates happen **every hour** at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data:
- `dump_pairs.bin` 10 Mb+ 
- `dump_tokens.bin` 10 Mb+
- `dump_p2tt.bin` 3 Mb+


## Example:
```
...
1,0x06da0fd433c1a5d7a4faa01111c044910a184553,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,0xdac17f958d2ee523a2206206994597c13d831ec7
...
```
where:
- `1`
  * pair/pool index at factory contract
- `0x06da0fd433c1a5d7a4faa01111c044910a184553`
  * USDT/WETH AMM [contract](https://etherscan.io/address/0x06da0fd433c1a5d7a4faa01111c044910a184553) address
- `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`
  * WETH ERC-20 token [contract](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) address
- `0xdac17f958d2ee523a2206206994597c13d831ec7`
  * USDT ERC-20 token [contract](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump` & `csv: false`.

## Usage CLI/API:
```bash
> node -e "require('sushiswap-dump').load().then(pairs => console.log(pairs.length))"
> 4557
```

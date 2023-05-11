
# Starship Config for NuShell

[`https://starship.rs/guide/#%F0%9F%9A%80-installation`](https://starship.rs/guide/#%F0%9F%9A%80-installation)

Add the following to the end of your `Nushell env file` (find it by running $nu.env-path in Nushell):

```rs
mkdir ~/.cache/starship
starship init nu | save -f ~/.cache/starship/init.nu
```
And add the following to the end of your Nushell configuration (find it by running $nu.config-path):

source ~/.cache/starship/init.nu



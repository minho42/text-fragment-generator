# Text fragment generator

Generate text fragment from css selector.


## Usage

Send http get request with json data.
### api route
`https://text-fragment-generator.herokuapp.com/api`

### json data
```json
{
	"url": "https://github.com/minho42",
	"selector": ".vcard-fullname.p-name"
}
```

### Output

`https://github.com/minho42#:~:text= Minho`



## See also
- https://github.com/GoogleChromeLabs/link-to-text-fragment
- https://wicg.github.io/scroll-to-text-fragment/

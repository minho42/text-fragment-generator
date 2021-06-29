# Text fragment generator

Generate text fragment from css selector.

Send http get request with json data.

## Example

### api route
`http://localhost:8000/api`

### json data
```json
{
	"url": "https://github.com/minho42",
	"selector": ".vcard-fullname.p-name"
}
```

### Output

`https://github.com/minho42#:~:text= Minho`
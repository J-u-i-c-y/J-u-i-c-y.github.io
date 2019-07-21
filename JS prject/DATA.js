let DATA = [ {
	"image": "https://3dwarehouse.sketchup.com/warehouse/getpubliccontent?contentId=a4b7d226-f34d-46ce-b75f-83d83ae51922",
	"name": "Samsung",
	"country": "Korea",
	"year":  2000,
	"memory": "32gb",
	"camera": "12 MGpx",
	"price": "600$",
	"button": ""
},
{
	"image": "https://itc.ua/wp-content/uploads/2016/02/og-1-1-770x546.jpg",
	"name": "Apple",
	"country": "USA",
	"year": 2003,
	"memory": "8gb",
	"camera": "8 MGpx",
	"price": "400$",
	"button": ""
},
{
	"image": "http://www.logobank.ru/images/ph/en/h/huawei.png",
	"name": "Huawei",
	"country": "China",
	"year": 2001,
	"memory": "32gb",
	"camera": "16 MGpx",
	"price": "1000$",
	"button": ""
},
{
	"image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADPz8/u7u4GBgYTExPV1dXf399aWlpwcHCXl5eCgoJ4eHj19fX8/PzDw8OysrJqamrn5+eGhoaSkpKlpaW6urry8vJQUFBHR0fg4OCwsLBXV1fR0dE8PDyhoaFjY2M4ODgdHR0tLS0vLy8aGhpKSkokJCQQEBCgOdE9AAAJ7UlEQVR4nO2d63qqOhCGRVttVQ5FsbaeV+3qvv8r3JXAJBMCTCAldj3z/gPB5COnmUkIoxHDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMMy9EL0f4iSbf3PKknia+s6PS6JDtnwLqmwXu6nvvPUnjBdfBnGS43rsO489SE+moqvylIS+s9qFMLuQ5An2G9/5teXwYiFPsPpNnc/maq3vxtNv6Xg2j5303Xj7DRrjP5313di++xbQQlrbex6f19kmnl1aNS4j3yKaWBnz/DSPJ+UVR0I5Jj4lNDI25PYyx02LojB4m9Sk4JlFJafXrJJVksL7LMa0Yp0tTJ0GUWFwHjj77Wz0LGaVS8J0GscfRIXB450ZAOtGfTfvglp4ktiTFiNPOG9z9bfp3F6c4ORLToXogjJ2VjyFabX7sWDhTxMixFaM9PeirJ99EwQvHmVJXh/UPD3L8+bh344nj8JKQiQQ3LywV/WUnP0pK4g+lez8gQH+5EZfoFYKT6ieIFSp8X/OBH57xj7ljUZ7JSvQ8z071BeYbIcBURtbOXrN3OoL1N55cBIlG7viXOZcYBB4czVSg0D7CBSBD18KlXhMUUWjrgZaC0s/ApUOpejvwr42TC1erPBYpn8WZ15/St83HoI3kUz98vMCy4c4JEodFb5E1D1MSmHwejqVaRfD1eVHBQbB0AplNKLoZc4/LDBYDytwBwl/iRNzlJvrOknmtKk1Oq+DKpTpioAaCpVeihBpunWqcFAvQzpHoo5Gak4Ux1x3gh9G0Tejjn3SkNE3mao4ViNRW/VCzc14EGc7KhwwpiGta+HTo2ApnrF2qXBACxySvFZlaPEx3AP1VDhY7E0WmRgKUUhGc+awt9hT4WC2GwwDx/wwRZnQ+3SnCgdy96UiYUnhsV5fOOJU4dcwClc4PS1qoXXpaBzprTAYZp4fkhN+vWauaQtjDm4V9u9rXtM0bbGOpPmSH6ZaHrb46qVbhb3s7/H6CcLX21Vc221BzylCC5XYPapImv7+CouueoLPvhHkVSNITzUeGVxwwIegQn022tKh/gpXRoWt0xubT+O/fZoWm8mORdxavU3G9iuBqf4KH7sofK9fo3Ws2klgdItGvzfdts6bclQNnfZXWPTVVgqbQ7iVqgqS8hYR1tx2fXk2BRYdKEysFbZNMuhmBPyQHxkqaRMOFC5tFbYHH3boemiG+/zQMsTtQOGnpcKl+W8QqPuH8MUJlygNBwqFWUhWmJj/REO9A0bDAypRIi4UHmwUTsz/oaOaSuBXRKhEibhQmNkoNEWKTIuWlDGjPCXGJUolV3GhcGGhsLKW8JjbamGiL1GTE80wOpzzw4tl7lwo3Fso1EcsuZRJX0gBP0DDW6MSpeJC4SNdod5NqEFlrfrBuA8TTjtDOu24UBjQFWoFdUQ/4tUU0NdA15JbNNj5I+BEYUhWqN2I3WfcS36WpyF0NrsdWVo0jhS+UxVqlVSbKw+XCwWYZQZvMO9erVclOFE4pSrUsjc3XqQD7TNEJUrFicIxVaFmctNiPGCH4hKl4kRhTFWoeYW0YOs9KNxQFRrTbgMK3pnC5XRMYgpNIiEq1HxXJZaTrOc66zKeAe3QmULy1C503FSF2jVn+YvJZSwntkBhXqn19es/qhD8IGot1eJ8ygSryastfwYrIY/EWK8i7aMQ+n5qT6MpVGYfmxRCqaUo0SEUQjukjhb11zQphFLLBxcXNg1ZIVSfGVFhfU/TpBAaQ26LTw1X2ipcpLNW8puge0iJCnWzlKYQXMohfQthFV/Kw4iqUEtGjvhNCt/LEyvTU2qlm8IXnJbh2ZoVam/yyNnpJoUwHfiEnyuRbgpzkxnWBR7JCrXBTEYqNOk5MJiUJ/7Lj4aJ0+RtHtrHM1lhrP0P/JC+f5Pin0EhBK9y52KYWBv21E5khZH2P5r7hIsHFIKhltfqYeKl+T3QdmKywkptRK98aiUMCmG4GC7m/YxTmtAVVsbrmfxND4aDQuhMxbyF5ZrLTgpzq1+aYCODwr8mByUyFMCqmMKfVkLF0mzFKdGmBYBOCnGLP5sUGpkYzcrLcr5ePlTPS4VQtxvnD2voovANV5bMRqFFSlIhPBYxvNgtIe2iMMNVZ2alkG5XSoXaPL5dNe2iMK+ksuMbWSmkO+mK+wjnpviQQgeFopuEsWJpqdC80MCAohC8mAU+pNBBYd7c5dgd2yoc/aWloyhsWRPViL3CP/kN0nYaWStsGtG+5B+rq8jhZGJVDW7YKxSrCGBS87mDwvpQxDWSPZGqEBqvmAiwcYPtFebXyxmgcReFo4m5FBZqDVQVgllTpGcxYFgr3GnVZNRJ4fcIUHUJ97dxRzZwtEweZla3muJWHrR63sanlgB4B9Fh2sYBR/HDndoej/NiHWySbHIStHpbGrRiwKC/2VwoDCVRowMmek7pIvR8bWZy2GRZlsSz1ishRWFR6X5Yq0KVJpNB1BFpYwz31oyMBMetueyjULQk+f7UgPuAQZrF5DBxVLVUKCxS2Sb2wwlUpkZF26e6GFYKi/XU8kR783GITFbUJD3oQ1dYHzcX7zVIq3DYfU6kmVAs4SCap4ulTq1JJBZZK/bEwBtHyffSi1fxXb9PWfyt9MaH3nBIWTFWNA+3LzoXXpJiigz+vrpiIYgTTl9WL9qcYg4Mv4Wr0n0WnZ6VH9VMMROmNMJtfU5+DKUTXDiWWAhUa8WwrzkXKPU0cyqxLC9lEainfRSVTBWt5NX8aoodpfWpLA49+xGIZi3K9ZlU+62eefWfHj0JxOGBUmLfXdpMj8rjJpGqZ1h250QDzsyl7FFUA8LrFpFqRsqtsEKb2BSmXJgRquvpaasmfwx10TusQrVehSK4lv4f6pM97aAEIL/pDSyrLnsKwutH6AH53zkRR71glerEdtMvuXIIPR0ftozOpCajqc3We3Mo/RS90nIPAvXtPa8ymBISV0l/KK/H4Vv8V1FBiN+xUVeqjdsLcqUEJ2b4nSTv+15KNEsGWZHjVf1XSo5rdXn5q/Y4Bt43qRmt7/zAg3QYz8/6ZnVfL6cxcmoj3Rq6s4966KHrj2r+JrN4k9xizpvxrPIGdXVP3rv7SEJacSvmdJ9uWhlb7qWPQVQ7le2GElyZnKrbLe7ab/OByebe75odg9n8Ur3pXr+NMKpbq/iSHUyfOwqnmXkC+k4LUFD/DZK35Xq3iW/TfodxnJwWtQ7I871//GnTbx/ov4NOTnTEdtGpwvHgO/NEKq9K09j/hm8hlYxNS6mbWdzZJztaeT2RP0cS/MbvruWkJ9rW0L/023mC183yX/7+YUE4zpYXg7i//8Q3LCXh+3izU75DetffHmMYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhnHA/5qHhHv0K0ghAAAAAElFTkSuQmCC",
	"name": "LG",
	"country": "Korea",
	"year": 1999,
	"memory": "4gb",
	"camera": "8 MGpx",
	"price": "200$",
	"button": ""
},
{
	"image": "http://heliograph.ru/images/1353053_asus-logotip.jpg",
	"name": "Asus",
	"country": "Taiwan",
	"year": 2010,
	"memory": "16gb",
	"camera": "14 MGpx",
	"price": "500$",
	"button": ""
}];
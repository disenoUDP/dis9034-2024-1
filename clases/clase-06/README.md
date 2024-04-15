# clase-06

lunes 15 abril 2024

## introducción a herramienta Google Colab

##### en computadores mac pytho ya aesta instalado asi que si se usa command + espacio se puede usar este. 
##### escribir python y despues python 3 para usarlo en mac.
##### nuevo cuaderno en Google Cloab.
##### https://ffmpeg.lav.io/ - sitio web para manipular material audiovisual.
##### en Google Cloab se usa el codigo !pwd para poder ver content.
##### despues se usa el codigo !ls que te va a orientar a sample_data.
##### cuando se sube el video en la parte de la carpeta al lado de sample_data los videos estaran en la capreta juntos a sample_data.
##### si no se ve el vido cuando uno ejecuta !ls entonces hay que hacer reflesh para que aparescan.
##### pip install videogrep
##### !ffmpeg --help
##### ffmpeg -i shoe.mp4 -filter_complex "[0:v]atadenoise[out_v]" -map "[out_v]" -map 0:a out.mp4 - video sacado de FFmpeg Explorer 
##### !ffmpeg -i shoe.mp4 -filter_complex "[0:v]atadenoise[out_v]" -map "[out_v]" -map 0:a out.mp4 - el Google Colab identifica el video de ffmpeg.
##### el video aparecera como out y se podra descargar.

https://colab.research.google.com/drive/13aP9gK1ar1aOcrKkszLNAiKUGRJ-4Zgn?authuser=1&hl=es#scrollTo=Yh0gAyZKeJSx


# clase-06
---
# apuntes clase-06 Phyton - Google Colab

`#` es para agregar comentarios, al contrario de javascript que se usan //

```phyton
# comentario en Phyton
# usando Phyton 3.x
# no Phyton 2.x porque es muy antiguo y vintage
```

`print(x)` es la equivalencia a `console.log` en javascript

```python
x = 4
print(x)
4
```

---

# Sam Levinge - FFmpeg Exporer

podemos encontrar obras de Sam Lavinge en `lav.io` donde iremos a `about`

y exploraremos la herramienta `FFmpeg Explorer`

<img width="1440" alt="Captura de pantalla 2024-04-15 a la(s) 15 20 26" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/e9734817-1d95-4e1f-b1dd-0cb78fad3327">

*sreenshot herramienta FFmpeg*

---

# !ffmpeg - colab


para hacer que el video desde ffmpeg pueda descargarse desde colab debemos copiar el `output command`

```phyton
ffmpeg -i punch.mp4 -filter_complex "[0:v]shufflepixels,shufflepixels,shufflepixels,shufflepixels,shufflepixels,shufflepixels[out_v]" -map "[out_v]" -map 0:a out.mp4
```

cuando recargamos la interfaz de archivos en colab podemos ver el video `out.mp4`

<img width="213" alt="Captura de pantalla 2024-04-15 a la(s) 16 40 08" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/ee4d33bf-a776-4b39-ace1-6d9edbb430ae">

*screenshot de `archivos` en Google Colab* 

---

*link Google Colab:* https://colab.research.google.com/drive/1eDqRPPYzGr0TdAsYHxImvn4XSbv9Uh2H?usp=sharing 









## FLujo de trabajo con GitFLow
### Inicializar
- Por defecto crea una rama develop
```
git flow init
```

### Crear (Feature)
- Creará una rama (feature/desc)
```
git flow feature start add-configuracion
```
- si tienen modificaciones 
```
git add .
git commit -m "actualizando cambios"
```
```
git flow feature finish add-configuracion
```
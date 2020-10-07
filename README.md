# PearBot

PearBot est un simple projet personel. Mon git ne sert qu'a transferer facilement PearBot d'un appareil à un autre

## Installation

### **pré-requis**

Vous devez disposer de `NodeJS`

### **Instalations des dépendances**
Dans le dossier racine du projet :
```bash
npm install
```
### **liaison du bot**
Dans `config.json` :
```json
{
    "prefix": "Your_prefix_command",
    "token":  "Your_token_bot"
}
```

## Usage

Dans le dossier contenant `index.js`
```bash
node index.js
```

## Commande

**Fonction goche ou droate**
```
!god
```

**Fonction sticker**

Ajouter un sticker:
```
!sticker 'nomDuSticker' 'lienDuSticker'
````
Afficher un sticker
```
!s 'nomDuSticker'
```
Liste des stickers
```
!listStick
```
Supprimer un sticker
```
!delStick *nomDuSticker*
```
<p align="center">
  <img src="assets/logo/mliterature-logo.png" alt="Maranao Literature Logo" width="120" />
</p>

<h1 align="center">📚 Maranao Literature App</h1>

<p align="center">
  <i>Preserving Maranao wisdom, poetry, and heritage — one app at a time.</i>
</p>

<p align="center">
  <a href="https://github.com/asharytamano/mliterature/stargazers">
    <img src="https://img.shields.io/github/stars/asharytamano/mliterature?color=FFD700&style=for-the-badge" alt="GitHub Stars">
  </a>
  <a href="https://github.com/asharytamano/mliterature/network/members">
    <img src="https://img.shields.io/github/forks/asharytamano/mliterature?color=20B2AA&style=for-the-badge" alt="GitHub Forks">
  </a>
  <a href="https://github.com/asharytamano/mliterature/issues">
    <img src="https://img.shields.io/github/issues/asharytamano/mliterature?color=DC143C&style=for-the-badge" alt="GitHub Issues">
  </a>
  <a href="https://github.com/asharytamano/mliterature/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License: MIT">
  </a>
  <a href="https://expo.dev">
    <img src="https://img.shields.io/badge/Expo-51.0.0-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo SDK">
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/React_Native-v0.76-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native">
  </a>
  <a href="https://github.com/asharytamano/mliterature/commits/main">
    <img src="https://img.shields.io/github/last-commit/asharytamano/mliterature?color=orange&style=for-the-badge" alt="Last Commit">
  </a>
</p>

---

<p align="center">
  <a href="https://github.com/asharytamano/mliterature/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/asharytamano/mliterature/expo-build.yml?style=for-the-badge&logo=githubactions&logoColor=white" alt="Build Status">
  </a>
  <a href="https://github.com/asharytamano/mliterature/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/asharytamano/mliterature?color=0088ff&style=for-the-badge" alt="Contributors">
  </a>
  <a href="https://github.com/asharytamano/mliterature/pulse">
    <img src="https://img.shields.io/badge/Maintained-Yes-success?style=for-the-badge" alt="Maintained">
  </a>
</p>

---

# 📚 Maranao Literature App

A digital preservation project dedicated to the rich **Maranao literary heritage** — including *Pananaroon* (proverbs), *Kandomana* (speeches), *Bayok* (poetry), *Oragis* (stories), *Darangen* (epic), *Kapamlalag* (riddles), *Totholan ko Radia Indaraptra* (myth), and *Mori a Kapranon* (Dr. Rizal’s *My Last Farewell*, translated by Sen. Dr. Ahmad Alonto).

Built using **React Native (Expo)**, the app makes these treasures accessible anytime, anywhere — preserving cultural identity through technology.

---

## 🌍 **Project Overview**

This app compiles Maranao literature in a modern mobile interface featuring:

- 🧭 **Drawer Navigation** for all literature categories  
- 📖 **Glossary** with quick search and A–Z navigation  
- ⭐ **Favorites System** powered by AsyncStorage  
- 🔍 **Search Filter** for easy lookup within each section  
- 🌓 **Light/Dark Mode** (auto-detect system theme)  
- 📤 **Share & Rating** functions  
- 🧑‍💻 **About Page** with app info and developer credits  

---

## ⚙️ **Tech Stack**

| Layer | Technology |
|-------|-------------|
| Framework | [React Native](https://reactnative.dev/) |
| Build & Runtime | [Expo](https://expo.dev/) |
| Navigation | [React Navigation v6](https://reactnavigation.org/) |
| Storage | AsyncStorage |
| Theming | Native light/dark system scheme |
| Version Control | Git + GitHub |
| Future Enhancements | SQLite integration, text-to-speech, audio playback |

---

## 🚀 **Installation & Running the App**

### Prerequisites
- Node.js ≥ 18.x  
- npm or yarn  
- Expo CLI (if not yet installed):  
  ```bash
  npm install -g expo-cli

---

Steps

1. Clone the repo:
git clone https://github.com/asharytamano/mliterature.git
cd mliterature

2. Install dependencies:
npm install

3. Run the development server:
npx expo start

4. Scan the QR code via the Expo Go app on your phone or press w to run on the web.

---

📱 Screenshots

| Home                             | Category                                 | Glossary                                 |
| -------------------------------- | ---------------------------------------- | ---------------------------------------- |
| ![Home](assets/screens/home.png) | ![Category](assets/screens/category.png) | ![Glossary](assets/screens/glossary.png) |

---

## 🏗️ **Folder Structure**

mliterature/  
├── App.js  
├── app.json  
├── package.json  
├── babel.config.js  
├── assets/  
│ └── logo/mliterature-logo.png  
└── src/  
├── navigation/DrawerNavigator.js  
├── screens/  
│ ├── HomeScreen.js  
│ ├── CategoryScreen.js  
│ ├── GlossaryScreen.js  
│ ├── ShareScreen.js  
│ ├── RatingScreen.js  
│ └── AboutScreen.js  
├── data/literature.json  
├── utils/storage.js  
├── hooks/  
├── theme/  
└── components/  

---

🌗 Future Enhancements (Roadmap)

| Feature             | Status     | Description                              |
| ------------------- | ---------- | ---------------------------------------- |
| 🔍 Global Search    | 🕓 Planned | Search across all categories             |
| 📦 CSV Import       | 🕓 Planned | Import data from OCR or external sources |
| 🎧 Audio Playback   | 🕓 Planned | Listen to recitations or readings        |
| 🗂️ Tag Filters     | 🕓 Planned | Group literature by theme or origin      |
| 🌐 Multilingual UI  | 🕓 Planned | English, Filipino, Maranao toggles       |
| 🕋 Offline Mode     | ✅ Done     | Works without internet                   |
| 📜 Export Favorites | 🕓 Planned | Save selections as PDF or text           |
| 🧠 AI Summaries     | 🕓 Planned | Auto-generate insights and explanations  |

---

💾 Data Management
All text data is stored in src/data/literature.json.<br>
Each category has an array of entries:

{
  "id": "p1",
  "title": "Example Proverb",
  "text": "Insert the proverb text here...",
  "source": "Source or reference"
}

---

🧑‍💻 Developer Info

Developer: Ashary Tamano<br>
Role: I.T. Specialist, Planner, Cultural Researcher<br>
Location: Philippines<br>
GitHub: @asharytamano<br>

---

🕌 Cultural Mission
“Preserving the language, wisdom, and identity of the Maranao people — one app at a time.”<br>
The Maranao Literature App aims to serve as both an educational tool and a digital archive for scholars, teachers, and young learners alike.

---

🧩 Contribution Guide

1. Fork the repository
2. Create your feature branch (git checkout -b feature/new-section)
3. Commit your changes (git commit -m "Add Bayok section content")
4. Push to the branch (git push origin feature/new-section)
5. Open a Pull Request

---

🛡️ License
This project is released under the MIT License.<br>
Feel free to use and adapt, provided proper attribution is given to the developer and cultural source material.

---

🕊️ Acknowledgments

• All contents are from the book "Sempad a Maradika a Paninggalan sa Ranao" based on the thoughts and ideas of the late Tingcap G. Pandi, and written by Jamel S. Macarampat.<br>
• The late Senator Dr. Ahmad Alonto for his translation of Rizal's My Last Farewell (Mori a Kapranon).<br>
• Maranao scholars and elders for preserving oral traditions.<br>
• All contributors to the ongoing cultural digitization of Lanao heritage.<br>


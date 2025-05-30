# 🛡️ Guardian Bot – Your Neighborhood Emergency Companion

## 🚨 Overview

**Guardian Bot** is an AI-powered community safety assistant designed to help residents report, respond to, and recover from neighborhood emergencies. Whether it's a fire, flood, or a broken streetlight, Guardian Bot bridges the gap between **citizens**, **rescue teams**, and **community support systems**.

---

## 🧠 Problem Statement

Most neighborhoods lack a centralized platform where:
- Residents can **quickly report** local emergencies.
- Authorities and services can **verify and act fast**.
- Communities can **mobilize help** and **stay informed** in real time.

Delays in reporting or lack of awareness can result in **loss of life**, **property damage**, or **panic**.

---

## 💡 Our Solution

**Guardian Bot** brings together reporting tools, real-time alerts, and community support in one unified web platform — ensuring faster response and stronger neighborhood resilience.

---

## 🌟 Features at a Glance

### 1. 🚨 Instant Issue Reporting
Residents can report critical and non-critical issues such as:
- Fire Accidents 🔥
- Flooded Roads 🌊
- Road Hazards 🛣️
- Power Failures ⚡
- Streetlight Problems 💡
- Any Hazardous Situation ☢️

📷 Option to upload a photo, and optionally add contact details.  
📍 Geo-location included for accurate alerts.

---

### 2. 🧑‍💼 Smart Admin Response Console
Admins can:
- Verify and prioritize incoming reports.
- Alert relevant emergency services instantly.
- Broadcast safety warnings to nearby residents.

✅ Issue status is tracked live.  
🗃️ Each report is logged for review and audit.

---

### 3. 📢 Community-Wide Emergency Alerts
Guardian Bot sends real-time messages to nearby users:
> "🚨 FIRE reported near XYZ Street. Please stay indoors. Need assistance? Reply YES."

Users can:
- Confirm their safety.
- Request help.
- Stay updated.

✅ Increases local awareness.  
✅ Reduces panic with timely info.

---

### 4. 💬 Chat-Based Support with AI
Users can interact with Guardian Bot’s AI chatbot to:
- Ask for help.
- Get information.
- Share what they witnessed.

💡 Bonus: Built-in **sentiment analysis** offers emotional support during traumatic events.

---

### 5. 🌍 Community SOS Hub – The Hero Feature
Activated in serious emergencies (e.g., natural disasters).  
Nearby citizens can contribute by:
- Donating money, groceries, or food 🍱
- Offering transport or temporary shelter 🚗🏠
- Sharing awareness posts 📲

🗺️ Every contribution is **geo-tagged** and **updated live**.

---

### 6. 📸 Visual Community Feed
A live feed displays reported issues in a familiar, scrollable format like Instagram:
- See what's happening nearby.
- Join conversations.
- Offer help or just stay informed.

Fosters **trust**, **transparency**, and **community collaboration**.

---

## 🔧 Tech Stack

| Layer       | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js / Angular                   |
| Backend    | Node.js + Express                    |
| Database   | MongoDB / Firebase                   |
| Chatbot    | OpenRouter API (AI NLP integration)  |
| Alerts     | Firebase Cloud Messaging / OneSignal |
| Maps       | Google Maps API                      |

---
## 🗺️ Architectural Diagram

![Architectural Diagram]
![image](https://github.com/user-attachments/assets/25796432-ad0b-4636-bf98-bfd830c1a0f4)


**User Flow Overview:**

- The user interacts via a multilingual and voice-enabled UI.
- The frontend sends requests to the backend Node.js server.
- The backend routes messages through:
  - OpenAI API for intelligent conversation
  - Translation API for multilingual response
  - Text-to-speech/Speech-to-text for voice assistant
- MongoDB stores chat history, reports, and user preferences.
- Alert or report notifications are sent to relevant civic departments or shown in the dashboard.

---

## 📷 Screenshots

> Add UI screenshots here if available
![image](https://github.com/user-attachments/assets/42579cae-dba0-409b-b60a-63c6505e579e)
![image](https://github.com/user-attachments/assets/44b7aed3-7d9a-439c-8417-cfe42c235af2)
![image](https://github.com/user-attachments/assets/13ca3071-d955-43e0-897e-07f3f5386dab)
![image](https://github.com/user-attachments/assets/614be44f-b22c-4092-a84b-bbf4e641ffea)
![image](https://github.com/user-attachments/assets/d16406fb-7620-4566-95fd-d9cd1e48660c)
![image](https://github.com/user-attachments/assets/44d3b154-bbad-4bee-8793-e0eed0d4f727)

![image](https://github.com/user-attachments/assets/7efa9ff0-58ea-439b-8b2b-2204aa9d77c9)
![image](https://github.com/user-attachments/assets/ec64f301-df6d-4f56-a7cf-72b90491f197)


---


## 🌐 How It Works

1. Resident submits an issue with optional photo and location.
2. Admin verifies and takes appropriate action.
3. Alerts are sent to nearby residents.
4. AI bot offers chat-based guidance and emotional support.
5. Community contributes to SOS Hub and shares updates.

---

## 🛠️ Future Enhancements

- Real-time issue heatmaps
- Emergency speed dial options
- Multilingual chatbot support
- Leaderboards for community helpers

---

## 🤝 Who Should Use Guardian Bot?

- 🏘️ Residents – Report and stay safe
- 🛡️ Admins – Coordinate emergency response
- 🚑 NGOs/Volunteers – Offer aid or logistics
- 🌐 General Public – Stay aware and connected

---
---
## 📬 Contact & Support

We’d love your feedback and support!

- 👩‍💻 [Swetha Ganesh](https://github.com/ganeshswetha879)
---

## 📬 Feedback & Suggestions

Have ideas or want to collaborate?  
- Submit issues or PRs on [GitHub](https://github.com/ganeshswetha879)  
- Connect on [LinkedIn](https://www.linkedin.com/in/swethaganesh07)

---

## 🌱 Made with purpose to build a better society.

![Profile views](https://komarev.com/ghpvc/?username=ganeshswetha879&color=green)

## 🔧 Setup Instructions

```bash
git clone https://github.com/Swethagggg/Guardian-Bot
cd Guardian-Bot
npm install
npm run dev

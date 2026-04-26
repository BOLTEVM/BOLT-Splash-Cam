<div align="center">
  <img src="./assets/BOLTM.jpeg" width="200" alt="BOLTM Logo" />
  <h1>BOLTM | Splash Cam</h1>
  <p><strong>Physical Digital Twin AR Experience</strong></p>
</div>

---

## ⚡ Overview

BOLTM Splash Cam is a high-fidelity Augmented Reality (AR) application built to bridge the gap between physical hardware and digital assets. By scanning the **BOLT Physical Digital Twin**, users trigger an interactive visual experience featuring high-definition video loops and direct web-to-chain integration.

## 🚀 Features

- **Monorepo Architecture**: Powered by `pnpm` workspaces for clean package management.
- **Image Tracking**: Seamless scanner logic optimized for the `BOLT.JPG` digital twin marker.
- **Dynamic Playback**: Loops `finalbossfinal.mp4` with a premium neon-orange visual identity.
- **Tap-to-Web**: Direct interactive link to [boltevm.com](https://boltevm.com) embedded in the AR scene.
- **Meta-Integrated**: Includes the `METAKEYNFC.gcode` for 3D printing the physical key.

## 🛠 Tech Stack

- **Runtime**: [Bun](https://bun.sh/) + [pnpm](https://pnpm.io/)
- **Frontend**: [Vite](https://vitejs.dev/) + [Vanilla JS](http://vanilla-js.com/)
- **AR Engine**: [MindAR](https://hiukim.github.io/mind-ar-js-doc/) + [A-Frame](https://aframe.io/)
- **Styling**: Vanilla CSS (Premium Glassmorphism & Neon Aesthetic)

## 📁 Structure

```text
/
├── apps/
│   └── mobile/      # Vite-powered AR application
├── assets/          # Media, markers, and GCODE
└── packages/        # Shared logic and components
```

## 🏃 Running Locally

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```

2. **Start Dev Server**:
   ```bash
   cd apps/mobile
   pnpm dev --host
   ```

3. **Scan**:
   Open the provided network URL on your mobile device and point your camera at the physical BOLT logo.

---

<div align="center">
  <p>Built for the <strong>BOLT EVM</strong> Ecosystem</p>
  <a href="https://boltevm.com">boltevm.com</a>
</div>

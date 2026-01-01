/* ==============================
   MODAL STYLES
============================== */

.project-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease;
}

.project-modal.show {
  opacity: 1;
  pointer-events: all;
}

.project-modal.hidden {
  display: none;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
}

.modal-box {
  position: relative;
  background: linear-gradient(145deg, #0f1629, #0a0f1f);
  border-radius: 18px;
  width: 90%;
  max-width: 650px;
  padding: 24px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
  animation: modalPop 0.35s ease;
  z-index: 10;
}

@keyframes modalPop {
  from {
    transform: scale(0.9) translateY(20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.modal-box img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 16px;
}

.modal-content h3 {
  margin-bottom: 8px;
  color: #7c9bff;
}

.modal-content p {
  color: #b8c0cc;
  margin-bottom: 20px;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #aaa;
  cursor: pointer;
  transition: 0.2s;
}

.modal-close:hover {
  color: white;
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s ease;
}

.reveal-show {
  opacity: 1;
  transform: translateY(0);
}

/* Ripple animation */
.btn {
  position: relative;
  overflow: hidden;
}

.btn .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  transform: scale(0);
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

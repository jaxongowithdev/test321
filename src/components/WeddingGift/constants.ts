export const bankInfo = {
  accountNumber: "123456789",
  accountHolder: "Đoàn Thị Kim Khoa",
  bankName: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)"
};

export const animationConfigs = {
  floatingElements: {
    petals: {
      count: 20,
      duration: [8, 12],
      delay: [0, 5]
    },
    sparkles: {
      count: 15,
      duration: [3, 5],
      delay: [0, 4]
    },
    hearts: {
      count: 12,
      duration: [4, 7],
      delay: [0, 4]
    },
    money: {
      count: 8,
      duration: [10, 15],
      delay: [0, 5]
    }
  },
  section: {
    fadeIn: {
      duration: 0.8,
      delay: 0.2
    },
    slideIn: {
      duration: 0.8,
      delay: 0.3
    }
  },
  ornamental: {
    rotation: [0, 360],
    scale: [1, 1.1, 1],
    duration: 6,
    orbit: {
      duration: 6,
      delay: 0.5
    }
  }
};

export const gradientStyles = {
  background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(251,207,232,0.1))',
  card: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(251,207,232,0.1))',
  field: 'linear-gradient(145deg, rgba(251,207,232,0.1), rgba(255,255,255,0.8))',
  thankYou: 'linear-gradient(135deg, rgba(251,207,232,0.2), rgba(255,255,255,0.4), rgba(244,63,94,0.1))'
};

export const shadowStyles = {
  card: '0 25px 50px -12px rgba(244, 63, 94, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  cardHover: '0 35px 70px -15px rgba(244, 63, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
  fieldHover: '0 10px 25px rgba(244, 63, 94, 0.1)'
};
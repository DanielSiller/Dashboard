function setColor(name, value) {
  const limiters = [
    { name: 'geral_30d', deadline: 95, fail: 90 },
    { name: 'geral_month', deadline: 95, fail: 90 },
    { name: 'base_30d', deadline: 95, fail: 90 },
    { name: 'base_month', deadline: 95, fail: 90 },
    { name: 'otif_30d', deadline: 98, fail: 95 },
    { name: 'otif_month', deadline: 98, fail: 95 },
    { name: 'mobile_30d', deadline: 98, fail: 95 },
    { name: 'mobile_month', deadline: 98, fail: 95 },
  ];
  for (const limiter of limiters) {
    if (name === limiter.name) {
      if (value >= limiter.deadline) {
        return '2ecc71';
      }

      if (value >= limiter.fail) {
        return 'ffc107';
      }

      return 'e74c3c';
    }
  }

  return '333';
}

export default { setColor };
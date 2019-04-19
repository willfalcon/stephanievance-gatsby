const formatPhone = num => {
  const area = num.substring(0, 3)
  const first = num.substring(3, 6)
  const last = num.substring(6)
  return {
    href: `(${area}) ${first}-${last}`,
    display: `${area}.${first}.${last}`,
  }
}

export default formatPhone;
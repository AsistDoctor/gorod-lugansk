export const useAccessibility = () => {
  const isAccessibilityMode = useCookie<boolean>('accessibility_mode', {
    default: () => false,
    watch: true
  })
  
  const fontSize = useCookie<'normal' | 'large' | 'xlarge'>('accessibility_font_size', {
    default: () => 'normal',
    watch: true
  })

  // Function to apply classes based on state
  const applyClasses = () => {
    if (!import.meta.client) return

    const html = document.documentElement

    // Toggle accessibility mode class
    if (isAccessibilityMode.value) {
      html.classList.add('accessibility-mode')
    } else {
      html.classList.remove('accessibility-mode')
    }

    // Toggle font size classes
    html.classList.remove('font-large', 'font-xlarge')
    // Apply font size only if accessibility mode is on, or always?
    // Previous code: if (!isAccessibilityMode) -> remove classes.
    // So font size only applies when mode is on.
    if (isAccessibilityMode.value) {
      if (fontSize.value === 'large') {
        html.classList.add('font-large')
      } else if (fontSize.value === 'xlarge') {
        html.classList.add('font-xlarge')
      }
    }
  }

  const toggleAccessibility = () => {
    isAccessibilityMode.value = !isAccessibilityMode.value
    if (!isAccessibilityMode.value) {
      // When turning off, we can reset font size or just hide the classes.
      // Resetting to normal might be expected behavior based on previous code.
      fontSize.value = 'normal'
    }
    applyClasses()
  }

  const setFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    fontSize.value = size
    applyClasses()
  }

  // Watch for changes
  watch([isAccessibilityMode, fontSize], () => {
    applyClasses()
  })

  // Initial application on mount
  onMounted(() => {
    applyClasses()
  })

  return {
    isAccessibilityMode,
    fontSize,
    toggleAccessibility,
    setFontSize
  }
}

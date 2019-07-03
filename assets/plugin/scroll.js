class Scroller {
  constructor(options) {
    this.options = {
      targetDomClass: '',
      once: true,
      topOffset: 0,
      bottomOffset: 0,
      activeClass: '',
      scrollIn: null,
      scrollOut: null,
      ...options
    }

    this.targetDomList = []

    this.scrolltop = 0
    this.windowHeight = window.innerHeight

    this.init()
  }

  init() {
    this._initTargetDomList()
    this._onWindowScroll()
    this._checkTargetTop()
  }

  _initTargetDomList() {
    if (!this.options.targetDomClass) return false
    const targets = this._getElementsByClass(this.options.targetDomClass)
    targets.forEach((c, i) => {
      this.targetDomList.push({
        dom: c,
        top: c.offsetTop
      })
    })

  }

  _checkTargetTop() {
    this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop
    const activeDom = this.targetDomList.filter(c => {
      return (c.top + this.options.topOffset <= this.scrolltop + this.windowHeight) && (c.top + this.options.topOffset >= this.scrolltop)
    })

    if (activeDom.length === 0) return false

    activeDom.forEach(c => {
      if (c.dom.getAttribute('actived')) return false
      const className = c.dom.getAttribute('class')
      c.dom.setAttribute('class', `${className} ${this.options.activeClass}`)
      c.dom.setAttribute('actived', `actived`)
      if (this.options.scrollIn) this.options.scrollIn(c)
    })
  }

  _onWindowScroll() {
    window.onscroll = () => {
      this._checkTargetTop()
    }
  }

  _getElementsByClass(className, results = []) {
    if (document.getElementsByClassName) {
      results.push.apply(results, document.getElementsByClassName(className))
    } else {
      const nodes = document.getElementsByTagName("*")
      for (let i = 0; i < nodes.length; i++) {
        const cNodes = nodes[i];
        const cNodeClsName = cNodes.className;
        const clsNames = cNodeClsName.split(" ");
        for (let j = 0; j < clsNames.length; j++) {
          if (clsNames[j] === className) {
            results.push(cNodes);
          }
        }
      }
    }
    return results
  }

}

export default Scroller

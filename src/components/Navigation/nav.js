export default class Nav {
    constructor() {
        this.$header = document.querySelector('.js-header')
        this.$nav = document.querySelector('.js-nav')
        this.$hamburger = document.querySelector('.js-hamburger')
        this.$html = document.querySelector('html')
        this.scrollTop = 0
        this.scrolledDown = false
        this.height = 0
    }

    init() {
        if (this.$hamburger === null) {
            return
        }
        this.onScrollStart()
        this.hideOnScroll()
        this.toggleMenu()
        this.menuLinks()

        window.addEventListener('resize', () => this.resizeHandler())
    }

    resizeHandler() {
        let winWidth = window.innerWidth
        this.height = this.$header.clientHeight

        if (
            winWidth >= breakpoints.find((br) => br.name === 'md').width &&
            this.$nav.classList.contains('open')
        ) {
            this.$nav.classList.remove('open')
            document.documentElement.classList.remove('overflow-hidden')
            this.$hamburger.classList.remove('active')
        }
    }

    toggleMenu() {
        let _self = this

        _self.$hamburger.addEventListener('click', function (e) {
            e.preventDefault()
            if (!_self.$hamburger.classList.contains('active')) {
                _self.$hamburger.classList.add('active')
                _self.$html.classList.add('overflow-hidden')
                _self.$nav.classList.add('open')
            } else {
                _self.$hamburger.classList.remove('active')
                _self.$html.classList.remove('overflow-hidden')
                _self.$nav.classList.remove('open')
            }
        })
    }

    menuLinks() {
        let self = this

        this.$nav.querySelectorAll('.js-link').forEach((element) => {
            element.addEventListener('click', function (e) {
                self.$hamburger.classList.remove('active')
                document.documentElement.classList.remove('overflow-hidden')
                self.$nav.classList.remove('open')
            })
        })

        this.$nav
            .querySelectorAll('.js-menu-dropdown-trigger')
            .forEach((element) => {
                element.addEventListener('click', function (e) {
                    if (e.target.nodeName !== 'A') {
                        element
                            .closest('.js-menu-dropdown')
                            .classList.toggle('open')
                    }
                })
            })

        document.querySelectorAll('.js-menu-dropdown').forEach((element) => {
            element.addEventListener('mouseover', (e) => {
                element.classList.add('open')
            })

            element.addEventListener('mouseleave', (e) => {
                element.classList.remove('open')
            })
        })
    }

    onScrollStart() {
        window.removeEventListener('scroll', this.handleScroll)
        let self = this

        setTimeout(function () {
            if (window.scrollY > 30) {
                self.$header.classList.add('scroll-start')
            }
        }, 0)

        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        let s = window.scrollY
        if (s > 30) {
            this.$header.classList.add('scroll-start')
        } else {
            this.$header.classList.remove('scroll-start')
        }
    }

    hideOnScroll() {
        let self = this
        this.height = this.$header.clientHeight
        this.$header.style.position = 'fixed'

        setTimeout(function () {
            if (window.scrollY > self.height) {
                self.$header.classList.add('scrolled')
                document.documentElement.style.setProperty(
                    '--header-height',
                    '20px'
                )
                self.$header.style.position = 'fixed'
                setTimeout(() => {
                    self.$header.classList.add('scroll-start')
                }, 250)
            }
        }, 0)

        window.addEventListener('scroll', function () {
            let s = window.scrollY
            let to = null
            self.scrolledDown = self.scrollTop < s && s > self.height

            if (s === 0) {
                self.$header.style.position = 'fixed'
                self.$header.classList.remove('scroll-start')
                clearTimeout(to)
            } else if (
                s > self.height &&
                !self.$header.classList.contains('scroll-start')
            ) {
                self.$header.style.position = 'fixed'
                to = setTimeout(() => {
                    self.$header.classList.add('scroll-start')
                }, 0)
            } else if (
                s <= self.height &&
                self.scrollTop < s &&
                self.$header.classList.contains('scroll-start')
            ) {
                self.$header.classList.remove('scroll-start')
                clearTimeout(to)
            }

            self.scrollTop = s

            if (
                !self.$header.classList.contains('scrolled') &&
                self.scrolledDown
            ) {
                self.$header.classList.add('scrolled')
                document.documentElement.style.setProperty(
                    '--header-height',
                    '20px'
                )
            }

            if (
                self.$header.classList.contains('scrolled') &&
                !self.scrolledDown
            ) {
                self.$header.classList.remove('scrolled')
                document.documentElement.style.setProperty(
                    '--header-height',
                    self.$header.clientHeight + 'px'
                )
            }
        })
    }
}

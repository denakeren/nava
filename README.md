# NAVA
## Dropdown Navigation

Inspired from http://usatoday.com navigation

### Installation
HTML Code:

add main.js code

<!-- nav drop -->
            <div class="nav-wrap">
                <!-- main menu -->
                <nav class="menu">
                    <ul>
                        <li><a data-link="" href="#">home</a></li>
                        <li><a data-link="menu1" href="#">menu1</a></li>
                        <li><a data-link="menu2" href="#">menu2</a></li>
                        <li><a data-link="" href="#">menu3</a></li>
                    </ul>
                </nav>
                <!-- main menu -->
                <div class="clearfix"></div>
                <!-- submenu -->
                <div class="submenu-wrap">
                    <div class="sub-menu" data-sub="menu1">
                        <ul>
                            <li><a href="#">submenu1 1</a></li>
                            <li><a href="#">submenu1 2</a></li>
                            <li><a href="#">submenu1 3</a></li>
                        </ul>
                    </div>
                    <div class="sub-menu" data-sub="menu2">
                        <ul>
                            <li><a href="#">submenu3 1</a></li>
                            <li><a href="#">submenu3 2</a></li>
                            <li><a href="#">submenu3 3</a></li>
                        </ul>
                    </div>
                </div>
                <!-- submenu -->
            </div>
             <!-- nav drop -->

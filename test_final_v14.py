from pathlib import Path
from PIL import Image
ROOT=Path('/mnt/data/hoc_v14')
css=(ROOT/'home.css').read_text(encoding='utf-8')
assert '.localized-page{width:100%;max-width:1024px;margin:0 auto;container-type:inline-size}' in css
assert "url('hero-clean-localized.png')" in css
assert 'url(\'hero-final-full.png\')' not in css
assert '.localized-page .hero.localized:before{content:none}' in css
assert 'max-width:1024px' in css
expected={
'index.html':('SIŁA · LOJALNOŚĆ · ZWYCIĘSTWO','WIĘCEJ NIŻ SOJUSZ. TO DRUŻYNA.','DOŁĄCZ DO NAS'),
'en.html':('STRENGTH · LOYALTY · VICTORY','MORE THAN AN ALLIANCE. A TEAM.','JOIN US'),
'de.html':('STÄRKE · TREUE · SIEG','MEHR ALS EIN BÜNDNIS. EIN TEAM.','JETZT DABEI SEIN'),
'ru.html':('СИЛА · ВЕРНОСТЬ · ПОБЕДА','БОЛЬШЕ, ЧЕМ АЛЬЯНС. ЭТО КОМАНДА.','ПРИСОЕДИНИТЬСЯ')}
for fn, vals in expected.items():
 h=(ROOT/fn).read_text(encoding='utf-8')
 for v in vals: assert v in h, (fn,v)
 assert 'A place for players' not in h
 assert 'hero-lead' not in h
im=Image.open(ROOT/'hero-clean-localized.png')
assert im.size==(1024,447), im.size
print('V14_ALL_CHECKS_PASSED')

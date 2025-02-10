<template>
  <header class="headermenu">
    <nav class="headermenu__wrapper">
      <router-link to="/" class="logo-link">
        <figure class="logo">
          <img src="@/assets/img/logo.svg" alt="Logo da Guild" />
        </figure>
      </router-link>
      <!-- <div class="headermenu__wrapper__item">
        <h2>Class Guides</h2>
        <ul class="headermenu__wrapper__item__list">
          <li>
            Death Knight
            <ul>
              <li>Blood</li>
              <li>Frost</li>
              <li>Unholy</li>
            </ul>
          </li>
          <li>
            Demon Hunter
            <ul>
              <li>Havoc</li>
              <li>Vengeance</li>
            </ul>
          </li>
          <li>
            Druid
            <ul>
              <li>Balance</li>
              <li>Feral</li>
              <li>Guardian</li>
              <li>Restoration</li>
            </ul>
          </li>
          <li>
            Evoker
            <ul>
              <li>Devastation</li>
              <li>Preservation</li>
              <li>Augmentation</li>
            </ul>
          </li>
          <li>
            Hunter
            <ul>
              <li>Beast Mastery</li>
              <li>Marksmanship</li>
              <li>Survival</li>
            </ul>
          </li>
          <li>
            Mage
            <ul>
              <li>Arcane</li>
              <li>Fire</li>
              <li>Frost</li>
            </ul>
          </li>
          <li>
            Monk
            <ul>
              <li>Brewmaster</li>
              <li>Mistweaver</li>
              <li>Windwalker</li>
            </ul>
          </li>
          <li>
            Paladin
            <ul>
              <li>Holy</li>
              <li>Protection</li>
              <li>Retribution</li>
            </ul>
          </li>
          <li>
            Priest
            <ul>
              <li>Discipline</li>
              <li>Holy</li>
              <li>Shadow</li>
            </ul>
          </li>
          <li>
            Rogue
            <ul>
              <li>Assassination</li>
              <li>Outlaw</li>
              <li>Subtlety</li>
            </ul>
          </li>
          <li>
            Shaman
            <ul>
              <li>Elemental</li>
              <li>Enhancement</li>
              <li>Restoration</li>
            </ul>
          </li>
          <li>
            Warlock
            <ul>
              <li>Affliction</li>
              <li>Demonology</li>
              <li>Destruction</li>
            </ul>
          </li>
          <li>
            Warrior
            <ul>
              <li>Arms</li>
              <li>Fury</li>
              <li>Protection</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="headermenu__wrapper__item">
        <h2>Dungeons</h2>
        <ul class="headermenu__wrapper__item__list">
          <li>Dungeon 1</li>
          <li>Dungeon 2</li>
        </ul>
      </div>
      <div class="headermenu__wrapper__item">
        <h2>Raids</h2>
        <ul class="headermenu__wrapper__item__list">
          <li>Raid 1</li>
          <li>Raid 2</li>
        </ul>
      </div> -->
    </nav>
    <div>
      <router-link to="/login">
        login
      </router-link>
      <router-link to="/groups">
        App
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderMenu",
};
</script>

<style scoped lang="scss">
.headermenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  color: color(cWhite);
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__wrapper {
    display: flex;
    align-items: center;
    height: 40px;

    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;

      .logo {

        img {
          max-height: 40px;
          width: auto;
        }
      }
    }

    &__item {
      position: relative;
      margin: 0px 16px;

      h2 {
        color: color(cPrimary);
        font-weight: 400;
      }

      &__list {
        position: absolute;
      }
    }
  }
}
</style>

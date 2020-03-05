<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="glossy">
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        @click="navDrawerOpen = !navDrawerOpen"
                        aria-label="Menu"
                        icon="menu"
                />

                <q-toolbar-title>
                    מפת יום אימוץ - הרצליה - שבת 7/3
                </q-toolbar-title>

                <q-space/>
              <q-icon name="person" @mousedown="adminClick(true)" @mouseup="adminClick()"/>
            </q-toolbar>

          <q-toolbar>
            <q-tabs shrink
                    v-model="tab"
                    align="justify"
                    narrow-indicator
            >
              <q-tab name="map" label="מפה"/>
              <q-tab name="dogs" label="כלבים"/>
            </q-tabs>
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-dialog v-model="adminDialog">
            <q-card>
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">כניסה למערכת ניהול</div>
              </q-card-section>

              <q-card-section>
                <q-input outlined v-model="adminCode" type="password" label="הכנס קוד מנהל" />
              </q-card-section>
              <q-card-section>
                <q-btn color="primary" label="כנס" /> <q-btn label="בטל" v-close-popup/>
              </q-card-section>
            </q-card>
          </q-dialog>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>

    export default {
        name: 'LayoutDefault',

        data() {
            return {
                navDrawerOpen: false,
                tab: 'map',
              adminDialog: false,
              adminCode: ''
            }
        },
      methods: {
          adminClick(down) {
            if(down) {

              this.adminClickStartTime = Date.now();
            } else {
              if(Date.now() - this.adminClickStartTime > 1000) {
                this.adminDialog = true;
              }

            }
          }
      }
    }
</script>

<style>
</style>

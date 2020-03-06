<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="glossy">
            <q-toolbar>
                <q-toolbar-title>
                    מפת יום אימוץ - שבת 7/3
                </q-toolbar-title>


              <q-icon name="person" @click="adminDialog = !adminDialog"/>
            </q-toolbar>

          <q-toolbar>
            <q-tabs shrink
                    v-model="tab"
                    align="justify"
                    narrow-indicator
            >
              <q-tab name="map" label="מפה"/>
              <q-tab name="dogs" label="כלבים" disable/>
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
              <q-card-actions>
                <q-btn color="primary" label="כנס" /> <q-btn label="בטל" v-close-popup/>
              </q-card-actions>
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
                adminCode: '',
            }
        },
      methods: {
      }
    }
</script>

<style>
</style>

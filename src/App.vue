<template>
  <v-app>
    <v-layout>
      
      
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="samplees@gmail.com"
            title="Me" />
        </v-list>

        <v-divider />

        <v-list nav>
          <v-list-item prepend-icon="mdi-calendar-text" title="Events" value="myfiles" color="#FF9149" :to="'/event'"
            router :active="$route.path === '/event'"/>
          <v-list-item prepend-icon="mdi-trash-can" title="Trash" value="shared" color="#FF9149" :to="'/trash'"
            router :active="$route.path === '/trash'"/>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" color="#FF9149" :to="'/starred'"
            router :active="$route.path === '/starred'"/>
          <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" color="#FF9149" :to="'/login'" 
          router :active="$route.path === '/login'"/>
        </v-list>
      </v-navigation-drawer>

      
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

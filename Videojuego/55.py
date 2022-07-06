import random
import pygame,sys
pygame.init()
w,h =700,500
pantalla=pygame.display.set_mode((w,h))
clock = pygame.time.Clock()
pygame.display.set_caption("Jiratromn Adventure")
#icon
icon=pygame.image.load("icon.png")
pygame.display.set_icon(icon)

#fondo
fondo=pygame.image.load("escena4.jpg")
fondo_t =pygame.transform.smoothscale(fondo,(w,h))
pantalla.blit(fondo_t,(0,0))

#musica de fondo
sound= pygame.mixer.Sound("sound.mp3")
sound_1= pygame.mixer.Sound("paso.mp3")
sound.play()

#personaje
#player=pygame.image.load("jirat.png")
#player_t =pygame.transform.smoothscale(player,(90,200))
#player_rect=player_t.get_rect()
#player_rect.move_ip(350,250)

#objeto jugador
class Jugador(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image=pygame.image.load("jirat.png")
        self.image=pygame.transform.smoothscale(self.image,(90,200))
        self.rect=self.image.get_rect()
        self.rect.x = w-650
        self.rect.y = h-290
        self.speed_x=0

    def dispara(self):
        balita=Bala(self.rect.x,self.rect.y)
        all_sprites.add(balita)
        all_balas.add(balita)
    
    def update(self):
        self.speed_x=0
        keys=pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.speed_x=-1
            #sound_1.play()
        keys=pygame.key.get_pressed()
        if keys[pygame.K_RIGHT]:
            self.speed_x=1
        self.rect.x=self.rect.x + self.speed_x

        if self.rect.right>w:
            self.rect.right=w
        if self.rect.left<0:
            self.rect.left=0
#obj bala
class Bala(pygame.sprite.Sprite):
    def __init__(self,x,y):
        super().__init__()
        self.image=pygame.image.load("laser.png")
        self.rect=self.image.get_rect()
        self.rect.x= x+70
        self.rect.y= y+100
        self.speed_y= -10

    def update(self):
        self.rect.y=self.rect.y + self.speed_y
        if self.rect.y<0:
            self.kill()

#obj enemigo
class Enemigo(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image=pygame.image.load("enemigo.png")
        self.image=pygame.transform.smoothscale(self.image,(80,100))
        self.rect=self.image.get_rect()
        self.rect.x= random.randrange(1,w)
        self.rect.y= -10
        self.speed_x= random.randrange(-5,5)
        self.speed_y= random.randrange(1,1)

    def update(self):
        self.rect.x=self.rect.x + self.speed_x
        self.rect.y=self.rect.y + self.speed_y
        if self.rect.x >w or self.rect.x<0 or self.rect.y>h:
            self.rect.x = random.randrange(1,w)
            self.speed_x= random.randrange(-5,5)
            self.speed_y= random.randrange(1,1)


all_sprites =pygame.sprite.Group()
all_murcielagos =pygame.sprite.Group()
all_balas =pygame.sprite.Group()
player= Jugador()
all_sprites.add(player)
for cont in range(8):
    murci = Enemigo()
    all_sprites.add(murci)
    all_murcielagos.add(player)
while True:
    for eventocapturar in pygame.event.get():
        if eventocapturar.type==pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif eventocapturar.type == pygame.KEYDOWN:
            if eventocapturar.key== pygame.K_SPACE:
                player.dispara()
    
    hits=pygame.sprite.spritecollide(player,all_murcielagos,True)
    if hits:
        pygame.quit()
        sys.exit()

    hits=pygame.sprite.groupcollide(all_balas,all_murcielagos,True,True)
    for hit in hits:
        enemigo=Enemigo()
        all_murcielagos.add(enemigo)
        all_sprites.add(enemigo)

    #if keys[pygame.K_UP]:
        #player_rect=player_rect.move(0,-1)
    #if keys[pygame.K_DOWN]:
       # player_rect=player_rect.move(0,1)
    #if keys[pygame.K_LEFT]:
      #      player_rect=player_rect.move(-1,0)
    #if keys[pygame.K_RIGHT]:
     #   player_rect=player_rect.move(1,0)
    
    #if player_rect.right>700:
     #   player_rect
    all_sprites.update()
    pantalla.blit(fondo_t,(0,0))
    clock.tick(120)
    #pantalla.blit(player_t,(player_rect))
    #player_t =pygame.transform.smoothscale(player,(110,200))
    all_sprites.draw(pantalla)
    pygame.display.flip()
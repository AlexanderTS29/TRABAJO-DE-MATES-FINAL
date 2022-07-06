import pygame,sys,random
pygame.init()
#colores
naranja=(255,69,0)
#definiendo pantalla
size=800,520
pantalla=pygame.display.set_mode(size)
pygame.display.set_caption("Jiratromn Adventure")
clock = pygame.time.Clock()
#icon
icon=pygame.image.load("icon.png")
pygame.display.set_icon(icon)

#musica de fondo
sound= pygame.mixer.Sound("sound.mp3")
sound.play()

lista=[]
for i in range(60):
    x = random.randint(0,800)
    y = random.randint(0,500)
    lista.append([x,y])
coorx = 50
coory = 290
x_speed=0
y_speed=0
#bucle de pantalla
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    fondo=pygame.image.load("escena4.jpg")
    fondot=pygame.transform.smoothscale(fondo,(800,600))
    pantalla.blit(fondot,(0,0))
    coorx += x_speed
    coory += y_speed

    #jugadores

    player=pygame.image.load("jirat.png")
    playert=pygame.transform.smoothscale(player,(80,200))
    pantalla.blit(playert,(coorx,coory))
    
    enemigo=pygame.image.load("enemigo.png")
    enemigot=pygame.transform.smoothscale(enemigo,(80,100))
    pantalla.blit(enemigot,(550,190))
    
    for coor in lista:
        pygame.draw.circle(pantalla,naranja,coor,2)
        coor[1] += 20
        if coor[1] > 500:
            coor[1] = 0
        if event.type ==pygame.KEYDOWN:
            if event.key ==pygame.K_LEFT:
                x_speed=-30
            if event.key == pygame.K_RIGHT:
                x_speed=30

        if event.type ==pygame.KEYUP:
            if event.key ==pygame.K_LEFT:
                x_speed=0
            if event.key == pygame.K_RIGHT:
                x_speed=0

    pygame.display.flip()
    clock.tick(60)

    

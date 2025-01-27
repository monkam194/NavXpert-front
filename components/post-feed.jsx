"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button2"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea2"
import { MessageCircle, Heart, Share2 } from "lucide-react"

export function PostFeed() {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex space-x-4">
          <Avatar className="h-10 w-10" />
          <Textarea placeholder="Partagez votre expérience de trajet..." />
        </div>
        <div className="mt-4 flex justify-end">
          <Button>Publier</Button>
        </div>
      </Card>

      {/* Example Post */}
      <Card className="p-4 text-black">
        <div className="flex space-x-4">
          <Avatar className="h-10 w-10" />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-black">Jean Dupont</h3>
              <span className="text-sm text-muted-foreground text-black">Ligne 1 • 5min</span>
            </div>
            <p className="mt-2 text-black">Le train est particulièrement ponctuel ce matin ! 🚆</p>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                <span>12</span>
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>4</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
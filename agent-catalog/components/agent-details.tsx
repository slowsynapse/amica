"use client"

import type { Agent } from "@/types/agent"
import { VRMDemo } from "./vrm-demo"
import { PriceChart } from "./price-chart"
import { TokenData } from "./token-data"
import { AgentDescription } from "./agent-description"
import { SocialMediaButtons } from "./social-media-buttons"
import { AgentTags } from "./agent-tags"
import { AgentTiers } from "./agent-tiers"
import { Button } from "./ui/button"
import { MessageSquare, ArrowRightLeft } from "lucide-react"
import { Integrations } from "./integrations"

interface AgentDetailsProps {
  agent: Agent
}

export function AgentDetails({ agent }: AgentDetailsProps) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-orbitron font-bold text-gray-900 mb-2 text-center">{agent.name}</h1>
        <p className="text-center text-gray-500 mb-2 font-roboto-mono">
          {agent.token} | {agent.tier.name} (Level {agent.tier.level})
        </p>
        <TokenData />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-12">
            <VRMDemo />
            <PriceChart />
          </div>
          <div className="space-y-8">
            <div className="flex justify-center space-x-4 mb-8">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-roboto-mono">
                <MessageSquare className="mr-2 h-4 w-4" /> Chat
              </Button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white font-roboto-mono">
                <ArrowRightLeft className="mr-2 h-4 w-4" /> Buy/Sell on Uniswap
              </Button>
            </div>
            <AgentDescription description={agent.description} />
            <SocialMediaButtons />
            <AgentTags tags={agent.tags} />
            <AgentTiers currentTier={agent.tier} />
            <Integrations />
          </div>
        </div>
      </div>
    </div>
  )
}


import React, { useState } from 'react';
import { Copy, RefreshCw, Sparkles } from 'lucide-react';

const NextEconomyIpsum = () => {
  const [generatedText, setGeneratedText] = useState('');
  const [outputType, setOutputType] = useState('paragraphs');
  const [count, setCount] = useState(3);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Expanded vocabulary banks
  const vocabulary = {
    concepts: [
      'regenerative economics', 'circular economy', 'donut economics', 'wellbeing economy', 
      'solidarity economy', 'community wealth building', 'economic democracy', 'commons governance',
      'cooperative ownership', 'stakeholder capitalism', 'impact measurement', 'social return on investment',
      'triple bottom line', 'shared value creation', 'inclusive growth', 'distributive justice',
      'restorative economics', 'gift economy', 'mutual aid networks', 'care economy',
      'bioregional development', 'ecological economics', 'degrowth', 'steady-state economics',
      'social enterprise', 'impact investing', 'blended finance', 'patient capital',
      'community-controlled development', 'cooperative federations', 'social wealth funds', 'universal basic services',
      'participatory economics', 'feminist economics', 'decolonial economics', 'indigenous economies',
      'transition towns', 'local currencies', 'complementary currencies', 'social impact measurement',
      'stakeholder governance', 'benefit corporations', 'social purpose vehicles', 'community ownership models',
      'regenerative agriculture', 'food justice', 'energy democracy', 'housing justice',
      'racial wealth gap', 'economic reparations', 'community land ownership', 'worker ownership',
      'beloved economies', 'beloved economics', 'narrative infrastructure'
    ],
    
    actions: [
      'democratizing ownership', 'redistributing wealth', 'centering community voices', 'building resilience',
      'fostering collaboration', 'cultivating abundance', 'reimagining systems', 'transforming structures',
      'advancing equity', 'stewarding resources', 'nurturing ecosystems', 'scaling impact',
      'embedding values', 'amplifying voices', 'bridging divides', 'catalyzing change',
      'decolonizing economics', 'localizing production', 'diversifying ownership', 'strengthening communities',
      'redistributing power', 'centering marginalized voices', 'building cooperative netw

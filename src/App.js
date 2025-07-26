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
      'redistributing power', 'centering marginalized voices', 'building cooperative networks', 'fostering economic democracy',
      'creating shared ownership', 'developing social infrastructure', 'investing in communities', 'supporting worker ownership',
      'advancing racial equity', 'promoting gender justice', 'protecting indigenous rights', 'ensuring intergenerational equity',
      'designing inclusive systems', 'implementing participatory budgeting', 'establishing community trusts', 'creating solidarity funds',
      'building local supply chains', 'developing cooperative enterprises', 'fostering social innovation', 'cultivating economic literacy',
      'strengthening social fabric', 'promoting ecological restoration', 'advancing climate justice', 'supporting community resilience',
      'creating alternative currencies', 'developing mutual aid systems', 'building cooperative platforms', 'advancing food sovereignty'
    ],
    
    frameworks: [
      'just transition framework', 'Theory U methodology', 'participatory budgeting', 'community land trusts',
      'employee stock ownership plans', 'benefit corporation structures', 'social impact bonds',
      'community development financial institutions', 'platform cooperatives', 'time banking systems',
      'local exchange trading systems', 'community-supported agriculture', 'participatory economics',
      'collaborative governance models', 'stakeholder engagement processes',
      'cooperative development models', 'social enterprise ecosystems', 'impact measurement frameworks',
      'community asset mapping', 'participatory action research', 'collective impact methodology',
      'systems change approaches', 'social innovation labs', 'design justice principles',
      'community-based participatory research', 'appreciative inquiry methods', 'asset-based community development',
      'popular education models', 'cooperative incubation programs', 'solidarity economy networks',
      'transition management approaches', 'resilience thinking frameworks', 'regenerative development models',
      'inclusive innovation methodologies', 'community wealth building strategies', 'democratic ownership structures'
    ],
    
    values: [
      'interdependence', 'reciprocity', 'stewardship', 'abundance mindset', 'collective ownership',
      'environmental justice', 'intergenerational equity', 'cultural preservation', 'human dignity',
      'ecological integrity', 'democratic participation', 'economic sovereignty', 'social cohesion',
      'racial equity', 'gender justice', 'climate resilience', 'food sovereignty',
      'community self-determination', 'economic democracy', 'social solidarity', 'ecological wisdom',
      'cultural diversity', 'indigenous knowledge', 'feminist principles', 'anti-racism',
      'environmental stewardship', 'social justice', 'economic justice', 'climate justice',
      'housing security', 'healthcare access', 'educational equity', 'digital justice',
      'worker dignity', 'community control', 'local ownership', 'shared prosperity',
      'ecological restoration', 'biodiversity protection', 'renewable energy', 'sustainable transportation',
      'circular resource flows', 'zero waste principles', 'regenerative practices', 'biomimicry'
    ],
    
    modifiers: [
      'community-driven', 'locally-owned', 'democratically-governed', 'ecologically-sound',
      'socially-responsible', 'culturally-responsive', 'regeneratively-designed', 'collectively-managed',
      'equitably-distributed', 'sustainably-sourced', 'transparently-operated', 'participatory',
      'inclusive', 'accessible', 'accountable', 'resilient',
      'worker-owned', 'community-controlled', 'stakeholder-governed', 'mission-driven',
      'impact-focused', 'values-based', 'purpose-driven', 'community-anchored',
      'cooperatively-structured', 'solidarity-based', 'justice-oriented', 'equity-centered',
      'culturally-grounded', 'place-based', 'bioregionally-focused', 'watershed-scaled',
      'neighborhood-level', 'grassroots-led', 'member-owned', 'collectively-governed',
      'democratically-structured', 'participatorily-managed', 'transparently-governed', 'accountably-operated'
    ],
    
    connectors: [
      'through collaborative approaches', 'via stakeholder engagement', 'by centering community needs',
      'while honoring indigenous wisdom', 'alongside ecosystem restoration', 'through democratic processes',
      'via cooperative structures', 'by redistributing power', 'through systems thinking',
      'while building local capacity', 'via participatory design', 'through collective action',
      'by fostering deep collaboration', 'through community-led initiatives', 'via solidarity networks',
      'while strengthening social bonds', 'through regenerative practices', 'by building trust',
      'via mutual aid systems', 'through shared governance', 'by creating inclusive spaces',
      'while honoring diverse perspectives', 'through collective stewardship', 'by advancing justice',
      'via cooperative development', 'through democratic ownership', 'by building community wealth',
      'while supporting local economies', 'through participatory planning', 'by fostering innovation'
    ]
  };

  const getRandomWord = (category) => {
    const words = vocabulary[category];
    return words[Math.floor(Math.random() * words.length)];
  };

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const generateSentence = () => {
    const structures = [
      () => `The ${getRandomWord('concepts')} movement emphasizes ${getRandomWord('values')} through ${getRandomWord('modifiers')} ${getRandomWord('frameworks')}.`,
      () => `Organizations are ${getRandomWord('actions')} ${getRandomWord('connectors')} while implementing ${getRandomWord('frameworks')}.`,
      () => `${capitalizeFirst(getRandomWord('actions'))} requires ${getRandomWord('modifiers')} approaches that center ${getRandomWord('values')}.`,
      () => `Communities practice ${getRandomWord('concepts')} ${getRandomWord('connectors')} and prioritize ${getRandomWord('values')}.`,
      () => `${capitalizeFirst(getRandomWord('frameworks'))} enable ${getRandomWord('modifiers')} solutions that advance ${getRandomWord('values')}.`,
      () => `By ${getRandomWord('actions')}, we can create ${getRandomWord('modifiers')} systems rooted in ${getRandomWord('values')}.`,
      () => `The transition toward ${getRandomWord('concepts')} demands ${getRandomWord('modifiers')} ${getRandomWord('frameworks')}.`,
      () => `${capitalizeFirst(getRandomWord('modifiers'))} ${getRandomWord('concepts')} emerges ${getRandomWord('connectors')}.`,
      () => `Practitioners of ${getRandomWord('concepts')} are ${getRandomWord('actions')} through ${getRandomWord('frameworks')}.`,
      () => `The principles of ${getRandomWord('concepts')} guide ${getRandomWord('modifiers')} approaches to ${getRandomWord('values')}.`,
      () => `${capitalizeFirst(getRandomWord('concepts'))} supports ${getRandomWord('values')} through ${getRandomWord('modifiers')} practices.`,
      () => `Leaders are ${getRandomWord('actions')} and developing ${getRandomWord('modifiers')} ${getRandomWord('frameworks')}.`,
      () => `${capitalizeFirst(getRandomWord('values'))} becomes central when ${getRandomWord('actions')} ${getRandomWord('connectors')}.`,
      () => `The practice of ${getRandomWord('concepts')} involves ${getRandomWord('actions')} and implementing ${getRandomWord('frameworks')}.`,
      () => `${capitalizeFirst(getRandomWord('modifiers'))} organizations focus on ${getRandomWord('values')} through ${getRandomWord('concepts')}.`
    ];
    
    const structure = structures[Math.floor(Math.random() * structures.length)];
    return structure();
  };

  const generateParagraph = () => {
    const sentenceCount = Math.floor(Math.random() * 4) + 3;
    const sentences = [];
    
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence());
    }
    
    return sentences.join(' ');
  };

  const generateSentences = (sentenceCount) => {
    const sentences = [];
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence());
    }
    return sentences.join(' ');
  };

  const generateWords = (wordCount) => {
    const words = [];
    const allWords = Object.values(vocabulary).flat();
    
    for (let i = 0; i < wordCount; i++) {
      words.push(allWords[Math.floor(Math.random() * allWords.length)]);
    }
    
    return words.join(' ') + '.';
  };

  const generateText = async () => {
    setIsGenerating(true);
    setCopied(false);
    
    // Add a slight delay for the animation effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let result = '';
    
    if (outputType === 'paragraphs') {
      const paragraphs = [];
      for (let i = 0; i < count; i++) {
        paragraphs.push(generateParagraph());
      }
      result = paragraphs.join('\n\n');
    } else if (outputType === 'sentences') {
      result = generateSentences(count);
    } else {
      result = generateWords(count);
    }
    
    setGeneratedText(result);
    setIsGenerating(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <h1 className="text-6xl font-extralight bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Next Economy Ipsum
              </h1>
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Generate placeholder text using language from post-capitalism, inclusive economics, 
              just transition, and regenerative economy movements.
            </p>
          </div>

          {/* Controls */}
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-8 mb-8">
            <div className="flex flex-wrap gap-8 items-end">
              <div className="flex-1 min-w-56">
                <label className="block text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">
                  Generate
                </label>
                <select
                  value={outputType}
                  onChange={(e) => setOutputType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-80

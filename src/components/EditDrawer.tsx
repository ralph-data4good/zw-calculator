import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { LabelField } from '@/components/LabelField'
import { Inputs } from '@/data/types'
import { validateInputs } from '@/lib/validation'

interface EditDrawerProps {
  isOpen: boolean
  onClose: () => void
  inputs: Inputs
  onSave: (inputs: Inputs) => void
}

export function EditDrawer({ isOpen, onClose, inputs, onSave }: EditDrawerProps) {
  const [editInputs, setEditInputs] = useState<Inputs>(inputs)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setEditInputs(inputs)
  }, [inputs])

  const handleSave = () => {
    const validationErrors = validateInputs(editInputs)
    if (validationErrors.length > 0) {
      const errorMap: Record<string, string> = {}
      validationErrors.forEach(err => {
        errorMap[err.field] = err.message
      })
      setErrors(errorMap)
      return
    }

    setErrors({})
    onSave(editInputs)
    onClose()
  }

  const characterizationSum =
    editInputs.characterization.organics +
    editInputs.characterization.recyclables +
    editInputs.characterization.residuals +
    editInputs.characterization.special

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Inputs</DialogTitle>
          <DialogDescription>
            Adjust parameters to see how they affect your waste management program estimates.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Population and Generation */}
          <div className="space-y-4">
            <h3 className="font-medium text-fg">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <LabelField
                label="Population Served"
                id="population"
                value={editInputs.population}
                onChange={val =>
                  setEditInputs({ ...editInputs, population: parseInt(val) || 0 })
                }
                min={1}
                error={errors.population}
                suffix="people"
              />
              <LabelField
                label="Waste Generation Rate"
                id="wastePerCapita"
                value={editInputs.wastePerCapitaKgDay}
                onChange={val =>
                  setEditInputs({ ...editInputs, wastePerCapitaKgDay: parseFloat(val) || 0 })
                }
                step="0.01"
                min={0}
                error={errors.wastePerCapitaKgDay}
                suffix="kg/cap/day"
              />
            </div>
          </div>

          {/* Waste Characterization */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-fg">Waste Characterization (%)</h3>
              <span
                className={`text-sm font-medium ${
                  Math.abs(characterizationSum - 100) < 0.01
                    ? 'text-primary'
                    : 'text-red-500'
                }`}
              >
                Total: {characterizationSum.toFixed(1)}%
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <LabelField
                label="Organics"
                id="organics"
                value={editInputs.characterization.organics}
                onChange={val =>
                  setEditInputs({
                    ...editInputs,
                    characterization: {
                      ...editInputs.characterization,
                      organics: parseFloat(val) || 0,
                    },
                  })
                }
                step="0.1"
                min={0}
                max={100}
                error={errors['characterization.organics']}
                suffix="%"
              />
              <LabelField
                label="Recyclables"
                id="recyclables"
                value={editInputs.characterization.recyclables}
                onChange={val =>
                  setEditInputs({
                    ...editInputs,
                    characterization: {
                      ...editInputs.characterization,
                      recyclables: parseFloat(val) || 0,
                    },
                  })
                }
                step="0.1"
                min={0}
                max={100}
                error={errors['characterization.recyclables']}
                suffix="%"
              />
              <LabelField
                label="Residuals"
                id="residuals"
                value={editInputs.characterization.residuals}
                onChange={val =>
                  setEditInputs({
                    ...editInputs,
                    characterization: {
                      ...editInputs.characterization,
                      residuals: parseFloat(val) || 0,
                    },
                  })
                }
                step="0.1"
                min={0}
                max={100}
                error={errors['characterization.residuals']}
                suffix="%"
              />
              <LabelField
                label="Special"
                id="special"
                value={editInputs.characterization.special}
                onChange={val =>
                  setEditInputs({
                    ...editInputs,
                    characterization: {
                      ...editInputs.characterization,
                      special: parseFloat(val) || 0,
                    },
                  })
                }
                step="0.1"
                min={0}
                max={100}
                error={errors['characterization.special']}
                suffix="%"
              />
            </div>
          </div>

          {/* Baseline Cost */}
          <div className="space-y-4">
            <h3 className="font-medium text-fg">Costs</h3>
            <LabelField
              label="Baseline Cost per Ton"
              id="baselineCost"
              value={editInputs.baselineCostPerTon}
              onChange={val =>
                setEditInputs({ ...editInputs, baselineCostPerTon: parseFloat(val) || 0 })
              }
              step="100"
              min={0}
              error={errors.baselineCostPerTon}
              suffix="PHP/ton"
            />
          </div>

          {/* Composting */}
          <div className="space-y-4">
            <h3 className="font-medium text-fg">Composting (Individual)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <LabelField
                label="Adoption Rate"
                id="adoption"
                value={editInputs.compostingAdoption}
                onChange={val =>
                  setEditInputs({ ...editInputs, compostingAdoption: parseFloat(val) || 0 })
                }
                step="0.01"
                min={0}
                max={1}
                error={errors.compostingAdoption}
                helper="0.15 = 15% of households"
              />
              <LabelField
                label="Diversion Efficiency"
                id="efficiency"
                value={editInputs.diversionEfficiency}
                onChange={val =>
                  setEditInputs({ ...editInputs, diversionEfficiency: parseFloat(val) || 0 })
                }
                step="0.01"
                min={0}
                max={1}
                error={errors.diversionEfficiency}
                helper="0.6 = 60% successfully composted"
              />
              <LabelField
                label="Compost Price per kg"
                id="compostPrice"
                value={editInputs.compostPricePerKg}
                onChange={val =>
                  setEditInputs({ ...editInputs, compostPricePerKg: parseFloat(val) || 0 })
                }
                step="0.5"
                min={0}
                error={errors.compostPricePerKg}
                suffix="PHP"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <Button onClick={handleSave} variant="primary">
            Save Changes
          </Button>
          <Button onClick={onClose} variant="ghost">
            Cancel
          </Button>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <p className="font-medium mb-1">Please fix the following errors:</p>
            <ul className="list-disc list-inside space-y-1">
              {Object.values(errors).map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

